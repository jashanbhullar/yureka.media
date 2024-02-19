from fastapi import APIRouter, Depends
from typing import Any

router = APIRouter()


@router.get(
    "/",
)
def sample() -> Any:
    """
    Sample endpoint.
    """
    return "Hello World"
