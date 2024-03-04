from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")
    PROJECT_NAME: str = "Yureka Media"

    AUTH0_DOMAIN: str
    AUTH0_API_AUDIENCE: str
    AUTH0_ISSUER: str
    AUTH0_ALGORITHMS: str


settings = Settings()
