# Enterprise Knowledge Assistant

An AI-powered document question answering system built using FastAPI, React, FAISS, Sentence Transformers, and Google's Gemini API. Users can upload documents and ask questions based only on the uploaded content using Retrieval-Augmented Generation (RAG).

## Live Demo

**Frontend:** https://enterprise-knowledge-assistant-v2.vercel.app

**Backend API:** https://enterprise-knowledge-assistant-v2-production-5a0d.up.railway.app

---

## Features

- Upload PDF and DOCX documents
- Automatic document parsing and text extraction
- Intelligent text chunking
- Semantic search using FAISS
- Context-aware answers using Gemini API
- REST API built with FastAPI
- Responsive React frontend
- Fully deployed application

---

## Tech Stack

### Frontend
- React
- Vite
- Axios

### Backend
- FastAPI
- Python

### AI / NLP
- Sentence Transformers
- FAISS
- Google Gemini API

### Document Processing
- PyPDF
- python-docx

### Deployment
- Frontend: Vercel
- Backend: Railway

---

## Project Structure

```
enterprise-knowledge-assistant/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── services/
│   │   ├── core/
│   │   ├── models/
│   │   └── main.py
│   ├── uploads/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## How It Works

1. Upload a document.
2. Text is extracted from the file.
3. The document is divided into smaller chunks.
4. Each chunk is converted into vector embeddings.
5. Embeddings are stored in a FAISS vector database.
6. User asks a question.
7. Relevant chunks are retrieved using semantic search.
8. Gemini generates the final answer using only the retrieved context.

---

## API Endpoints

### Health Check

```
GET /api/v1/health
```

### Upload Document

```
POST /api/v1/upload
```

### Ask Question

```
POST /api/v1/ask
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/mishrayuthika05-ui/enterprise-knowledge-assistant-v2.git

cd enterprise-knowledge-assistant
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

source venv/bin/activate
```

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run backend

```bash
uvicorn app.main:app --reload
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Create a `.env` file

```env
VITE_API_URL=http://127.0.0.1:8000/api/v1
```

---

## Future Improvements

- Multiple document support
- Chat history
- Source page citations
- Authentication
- Persistent vector database
- Streaming responses

---

## Screenshots

### Home Page
![Home Page](https://github.com/mishrayuthika05-ui/enterprise-knowledge-assistant-v2/blob/main/Screenshot%202026-07-15%20103703.png?raw=true)



### Document Upload
![Upload Document](https://github.com/mishrayuthika05-ui/enterprise-knowledge-assistant-v2/blob/main/Screenshot%202026-07-15%20103914.png?raw=true)


### Question Answering
![Question Answering](https://github.com/mishrayuthika05-ui/enterprise-knowledge-assistant-v2/blob/main/Screenshot%202026-07-15%20103852.png?raw=true)





## Author

**Yuthika Mishra**

GitHub: https://github.com/mishrayuthika05-ui

LinkedIn: https://www.linkedin.com/in/yuthika-mishra-0ab189337

---

## License

This project is created for learning and portfolio purposes.
