import google.generativeai as genai

from app.core.config import GEMINI_API_KEY

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_answer(question: str, context: str):
    prompt = f"""
You are an Enterprise Knowledge Assistant.

Answer ONLY using the context below.
If the answer is not present in the context, say:
"I couldn't find the answer in the uploaded documents."

Context:
{context}

Question:
{question}

Answer:
"""

    response = model.generate_content(prompt)

    return response.text