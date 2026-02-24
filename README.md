# 💬 AI Portfolio Assistant

An AI-powered personal portfolio assistant built with:

- ⚡ FastAPI (Backend)
- 🗄️ PostgreSQL / SQLite (Database)
- 🤖 OpenRouter (Mistral 7B)
- ⚛️ React + Vite + Tailwind (Frontend)

The AI answers questions strictly based on resume data stored in the database.


## 📂 Project Structure

backend/
├── main.py
├── ai_service.py
├── models.py
├── database.py
└── routes/

frontend/
├── src/
│   └── components/AIChat.tsx
└── .env

## 🚀 Local Setup

### 1️⃣ Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
````

Create `.env` file inside backend:

```
OPENROUTER_API_KEY=your_openrouter_key_here
```

Run server:

```
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

open ```D:\Projects\ai portfolio\backend\app```  and run ```python resume_seed.py```  

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file inside frontend:

```
VITE_API_URL=http://127.0.0:8000
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:8000
```

## 🧠 How It Works

1. User sends message from React chat UI
2. FastAPI receives `/chat` request
3. Resume data is pulled from database
4. AI prompt is constructed
5. OpenRouter returns AI response
6. Response is shown in chat UI

## 🔒 Security

* API key stored in backend `.env`
* AI restricted to resume-only responses
* CORS enabled for frontend domain

## 🛠 Tech Stack

* FastAPI
* SQLAlchemy
* React + Vite
* TailwindCSS
* OpenRouter API
* Mistral 7B

## 👨‍💻 Author
Astha Pitambarwale