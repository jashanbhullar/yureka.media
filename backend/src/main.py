from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from src.api import api
from src.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api.api_router)
