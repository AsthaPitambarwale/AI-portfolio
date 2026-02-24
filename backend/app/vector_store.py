import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from .resume_seed import RESUME_CHUNKS

# small fast offline embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")

class ResumeVectorStore:
    def __init__(self):
        self.texts = [chunk["content"] for chunk in RESUME_CHUNKS]
        self.embeddings = model.encode(self.texts)

        dimension = self.embeddings.shape[1]
        self.index = faiss.IndexFlatL2(dimension)
        self.index.add(np.array(self.embeddings).astype("float32"))

    def search(self, query: str, k: int = 3):
        query_vector = model.encode([query])
        distances, indices = self.index.search(
            np.array(query_vector).astype("float32"), k
        )
        return [self.texts[i] for i in indices[0]]

vector_store = ResumeVectorStore()