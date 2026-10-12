# -------------------------------------------------------------
# Stage 1: Build React Frontend (SPA)
# -------------------------------------------------------------
FROM node:20-slim AS frontend-builder
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

# -------------------------------------------------------------
# Stage 2: Python Backend (Django API + WhiteNoise SPA Serving)
# -------------------------------------------------------------
FROM python:3.11-slim

# Hugging Face Spaces requires a user with UID 1000
RUN useradd -m -u 1000 user
ENV HOME=/home/user \
    PATH=/home/user/.local/bin:$PATH \
    PYTHONUNBUFFERED=1 \
    PORT=7860

WORKDIR /app

# Install Python dependencies
COPY backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r ./backend/requirements.txt

# Copy source code and vault
COPY backend/ ./backend/
COPY Obsidian/ ./Obsidian/
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist/

# Set working directory to backend
WORKDIR /app/backend

# Initialize database and index vault
RUN python manage.py migrate && python manage.py build_index

# Set ownership to non-root user
RUN chown -R user:user /app
USER user

# Hugging Face Spaces listens on port 7860
EXPOSE 7860

CMD ["gunicorn", "garden_api.wsgi:application", "--bind", "0.0.0.0:7860", "--workers", "2"]
