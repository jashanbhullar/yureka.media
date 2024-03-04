from typing import Any

from fastapi import APIRouter
from fastapi.security import HTTPBearer

token_auth_scheme = HTTPBearer()

router = APIRouter()


@router.get(
    "/",
)
def sample() -> Any:
    """
    Sample endpoint.
    """
    return "Hello World"
