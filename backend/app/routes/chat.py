from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..ai_service import generate_ai_response

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/chat")
def chat_endpoint(payload: dict, db: Session = Depends(get_db)):
    user_message = payload.get("message")

    if not user_message:
        return {"response": "Please enter a valid message."}

    ai_reply = generate_ai_response(user_message, db)
    return {"response": ai_reply}