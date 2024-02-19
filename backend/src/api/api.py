from fastapi import APIRouter

from . import sample

api_router = APIRouter()
api_router.include_router(sample.router, tags=["sample"])
