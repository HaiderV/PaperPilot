import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ocrRoutes from "./routes/ocr.routes.js";
import { exec } from "child_process";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use("/api/ocr", ocrRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "PaperPilot OCR API is running 🚀",
    });
});

app.get("/test-ocr", (req, res) => {
    exec("ocrmypdf --version", (error, stdout, stderr) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                error: stderr || error.message,
            });
        }

        res.json({
            success: true,
            version: stdout.trim(),
        });
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
