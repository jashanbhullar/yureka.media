# Makefile for managing a FastAPI project
.PHONY: install freeze compile upgrade merge run

# Install dependencies from requirements.txt
install:
	uv pip install -r requirements.txt

# Freeze current dependencies to requirements.txt
freeze:
	uv pip freeze > requirements.txt

# Compile dependencies from requirements.txt
compile:
	uv pip compile requirements.txt

# Sync dependencies from requirements.txt
sync:
	uv pip sync requirements.txt

# lint the code
lint:
	.venv/bin/ruff check src/

# lint the code
lint_fix:
	.venv/bin/ruff check src/ --fix

# format the code
format:
	.venv/bin/ruff format src/

# Apply database migrations (Alembic)
upgrade:
	alembic upgrade heads

# Generate a new Alembic migration script
migration:
	alembic revision --autogenerate

# Merge multiple Alembic heads
merge:
	alembic merge

# Start the FastAPI application
start:
	.venv/bin/uvicorn src.main:app --reload --port 8000

# Clean up compiled Python files and caches
clean:
	find src/ -name "__pycache__" -exec rm -rf {} +

# Run tests using pytest
# test:
# 	pytest
