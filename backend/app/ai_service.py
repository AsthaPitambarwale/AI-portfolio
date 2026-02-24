import os
import requests
from dotenv import load_dotenv
from sqlalchemy.orm import Session
from pathlib import Path
from .models import Resume
from .vector_store import vector_store

# Load .env from backend root directory
BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"


# AI Response Generator
def generate_ai_response(user_question: str, db: Session):

    # 1️⃣ Check API key
    if not OPENROUTER_API_KEY:
        return "OpenRouter API key is missing. Please check your .env file."

    # 2️⃣ Retrieve relevant resume context using vector search (RAG)
    try:
        relevant_chunks = vector_store.search(user_question, k=3)

        if not relevant_chunks:
            return "Resume context could not be retrieved."

        resume_text = "\n".join(relevant_chunks)

    except Exception:
        return "Failed to retrieve resume context."

    # 3️⃣ Create AI prompt (strict no-hallucination prompt)
    prompt = f"""
You are Astha Pitambarwale's professional portfolio assistant.

Rules:
- Answer only using the provided resume context
- Keep answers short, clear, and professional
- Do NOT add extra information
- If the answer is missing, reply exactly:
"I don't have that information in the resume."

RESUME CONTEXT:
{resume_text}

USER QUESTION:
{user_question}
"""

    # 4️⃣ Prepare headers
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Portfolio AI"
    }

    # 5️⃣ Model payload
    payload = {
        "model": "openai/gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": "You are a professional portfolio AI assistant."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    }

    # 6️⃣ Send request to OpenRouter
    try:
        response = requests.post(
            OPENROUTER_URL,
            headers=headers,
            json=payload,
            timeout=30
        )

        data = response.json()

        # Handle non-200 errors
        if response.status_code != 200:
            return f"OpenRouter Error: {data}"

        # Handle OpenRouter API errors
        if "error" in data:
            return f"OpenRouter Error: {data['error']}"

        return data["choices"][0]["message"]["content"]

    except requests.exceptions.Timeout:
        return "AI request timed out. Please try again."

    except Exception as e:
        return f"Server Error: {str(e)}"