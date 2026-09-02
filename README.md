# irena-mongodb-lessons

Hands-on lesson notebooks for MongoDB Atlas — from basic CRUD through Atlas
Vector Search and building a retrieval pipeline over a PDF source document.

Each dated folder is one lesson, self-contained with its own notebook and data.

## Lessons

| Folder | Notebook | Topics |
| --- | --- | --- |
| `2-9-26/` | `search_index.ipynb` | Connecting to Atlas with PyMongo, listing databases and collections, creating a `vectorSearch` index with `SearchIndexModel`, loading a PDF with LangChain's `PyPDFLoader` |

## Requirements

- Python 3.10+
- A MongoDB Atlas cluster (the free M0 tier is enough)
- A [Voyage AI](https://dash.voyageai.com/) API key for generating embeddings

## Setup

```bash
# 1. Clone
git clone https://github.com/<your-username>/irena-mongodb-lessons.git
cd irena-mongodb-lessons

# 2. Create and activate a virtual environment
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate

# 3. Install dependencies
pip install pymongo python-dotenv langchain-community pypdf jupyter

# 4. Configure credentials
cp .env.example .env             # Windows: copy .env.example .env
```

Then open `.env` and fill in your own values:

| Variable | What it is |
| --- | --- |
| `MONGO_URI` | Atlas connection string (Atlas UI → Cluster → Connect → Drivers) |
| `API_ENDPOINT` | MongoDB AI / embeddings endpoint, `ai.mongodb.com` |
| `VOYAGER_API_KEY` | Voyage AI API key used to embed the document chunks |

## Running

```bash
jupyter notebook
```

Open the notebook for the lesson you want and run the cells top to bottom.
Notebooks resolve data files relative to their own folder, so start Jupyter
from the lesson directory (or from the repo root and use the file browser)
rather than moving the notebook.

## Vector search index

The lessons create an Atlas Search index of type `vectorSearch`:

```python
definition = {
    "fields": [
        {
            "type": "vector",
            "path": "embedding",
            "numDimensions": 512,
            "similarity": "cosine",
        }
    ]
}
```

`numDimensions` must match the embedding model you use — 512 here. If you
switch models, drop and recreate the index with the new dimension count.
Index creation is asynchronous; Atlas reports the index as `PENDING` for a
minute or so before queries against it will return results.

## Notes on secrets

`.env` is git-ignored and must never be committed. `.env.example` is the
tracked template — it holds variable names and placeholders only.

Notebook outputs are cleared before committing, because a printed connection
string ends up in git history just as permanently as a committed file does.
To do that automatically:

```bash
jupyter nbconvert --clear-output --inplace path/to/notebook.ipynb
```

## Repository layout

```
.
├── .env.example          # template for local credentials
├── .gitignore
├── README.md
└── 2-9-26/
    ├── search_index.ipynb
    └── data/
        └── mongodb_handbook.pdf
```
