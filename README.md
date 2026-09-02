# Playwright Docker Setup

This project is configured to run Playwright tests inside Docker so you do not need Node, browsers, or dependencies installed on your local machine.

## Run tests

```bash
docker compose run --rm playwright
```

This will build the image, install dependencies, and execute the Playwright suite in a container.

## Optional: rebuild and run

```bash
docker compose up --build --abort-on-container-exit
```
