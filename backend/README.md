## Backend

### Setup:

- Add steps for setup

### Based on:

- fastAPI
- Alembic for migrations
- Postgres + postgis + mobilityDB as database
- SQLAlchemy as ORM
- Pydantic for validation
- uv as package manager
- ruff as formatter and linter

### Sources:

- https://medium.com/@tclaitken/setting-up-a-fastapi-app-with-async-sqlalchemy-2-0-pydantic-v2-e6c540be4308
- https://github.com/tiangolo/full-stack-fastapi-postgresql/tree/master

### TODOs

- connect to the postgres, model the user (basic)
- deploy on the cloud
- enable google auth
- create workflow for adding a google analytics site
- integrate the google analytics script
- fetch and store the data (data modeling needed here, basic only)
- same with the trends script
