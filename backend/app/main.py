from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base, SessionLocal
from .models import Resume
from .resume_seed import RESUME_CHUNKS
from .routes import chat

app = FastAPI(title="Portfolio AI Backend")

# Create tables
Base.metadata.create_all(bind=engine)

# CORS (IMPORTANT for your frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Seed Resume Data
def seed_resume():
    db = SessionLocal()
    if db.query(Resume).count() == 0:
        for item in RESUME_CHUNKS:
            db.add(Resume(section=item["section"], content=item["content"]))
        db.commit()
    db.close()

seed_resume()

app.include_router(chat.router)