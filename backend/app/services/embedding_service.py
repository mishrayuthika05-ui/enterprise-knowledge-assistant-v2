from sentence_transformers import SentenceTransformer

# Lazy loaded model (Render memory optimization)
_model = None


def get_model():
    """
    Load the embedding model only when it is needed.
    """
    global _model

    if _model is None:
        _model = SentenceTransformer("all-MiniLM-L6-v2")

    return _model


def generate_embeddings(chunks: list[str]):
    """
    Convert text chunks into vector embeddings.
    """
    model = get_model()
    embeddings = model.encode(chunks, convert_to_numpy=True)

    return embeddings


def generate_query_embedding(question: str):
    """
    Convert a user question into an embedding.
    """
    model = get_model()
    embedding = model.encode(question, convert_to_numpy=True)

    return embedding
