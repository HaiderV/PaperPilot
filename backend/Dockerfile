FROM node:22-bookworm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    ghostscript \
    tesseract-ocr \
    qpdf \
    python3 \
    python3-pip \
    pngquant \
    unpaper \
    && rm -rf /var/lib/apt/lists/*

# Install OCRmyPDF
RUN python3 -m pip install --break-system-packages ocrmypdf

WORKDIR /app

# Copy package files first for better Docker layer caching
COPY package*.json ./

# Install Node dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Create temp directory
RUN mkdir -p temp

# Render provides the PORT environment variable
ENV PORT=5000

EXPOSE 5000

CMD ["npm", "start"]