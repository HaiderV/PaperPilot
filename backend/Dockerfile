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
RUN pip3 install --break-system-packages ocrmypdf

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p temp

EXPOSE 5000

CMD ["npm", "start"]