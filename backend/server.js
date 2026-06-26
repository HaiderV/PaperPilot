import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ocrRoutes from "./routes/ocr.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/ocr", ocrRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "PaperPilot OCR API is running 🚀",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});