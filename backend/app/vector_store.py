import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from .resume_seed import RESUME_CHUNKS


class ResumeVectorStore:
    def __init__(self):
        # Load model once
        self.model = SentenceTransformer("all-MiniLM-L6-v2")

        # Store resume texts
        self.texts = [chunk["content"] for chunk in RESUME_CHUNKS]

        # Precompute embeddings
        self.embeddings = self.model.encode(self.texts)

    def search(self, query: str, k: int = 3):
        query_embedding = self.model.encode([query])

        similarities = cosine_similarity(
            query_embedding, self.embeddings
        )[0]

        top_indices = similarities.argsort()[-k:][::-1]

        return [self.texts[i] for i in top_indices]


vector_store = ResumeVectorStore()
