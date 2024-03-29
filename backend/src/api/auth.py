from fastapi import APIRouter, Security
from fastapi.security import HTTPBearer

from src.utils.auth import auth

token_auth_scheme = HTTPBearer()

router = APIRouter()


@router.get("/check")
def private(token: str = Security(auth.verify)):
    """A valid access token is required to access this route"""

    return token
