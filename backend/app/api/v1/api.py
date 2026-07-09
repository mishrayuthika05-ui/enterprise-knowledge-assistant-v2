from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel

from app.models.health import HealthResponse
from app.services.file_service import save_file
from app.services.parser_service import extract_text
from app.services.chunk_service import chunk_text
from app.services.embedding_service import (
    generate_embeddings,
    generate_query_embedding,
)
from app.services.vector_store import VectorStore
from app.services.gemini_service import generate_answer

router = APIRouter()

vector_store = VectorStore()


class QuestionRequest(BaseModel):
    question: str


@router.get("/health", response_model=HealthResponse)
def health():
    return HealthResponse(
        status="healthy",
        message="Enterprise Knowledge Assistant API is running successfully"
    )


@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    file_path = save_file(file)

    text = extract_text(file_path)
    print("Text length:", len(text))

    chunks = chunk_text(text)
    print("Chunks:", len(chunks))

    embeddings = generate_embeddings(chunks)
    print("Embeddings shape:", embeddings.shape)

    vector_store.add_embeddings(embeddings, chunks)

    return {
        "filename": file.filename,
        "characters": len(text),
        "chunks": len(chunks),
        "status": "Document indexed successfully"
    }


@router.post("/ask")
def ask_question(request: QuestionRequest):
    query_embedding = generate_query_embedding(request.question)

    results = vector_store.search(query_embedding, k=3)

    context = "\n\n".join(results)

    answer = generate_answer(request.question, context)

    return {
        "question": request.question,
        "answer": answer,
        "sources": results
    }