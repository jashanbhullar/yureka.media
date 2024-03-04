from fastapi import APIRouter

from . import auth, sample

api_router = APIRouter()
api_router.include_router(sample.router, tags=["sample"])
api_router.include_router(auth.router, tags=["Auth"])
