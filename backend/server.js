import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ocrRoutes from "./routes/ocr.routes.js";
import { exec } from "child_process";
import fs from "fs";

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
        env: {
            hasCloudinaryName: !!process.env.CLOUDINARY_CLOUD_NAME,
            hasCloudinaryKey: !!process.env.CLOUDINARY_API_KEY,
            hasCloudinarySecret: !!process.env.CLOUDINARY_API_SECRET,
            nodeEnv: process.env.NODE_ENV || "development",
            port: process.env.PORT || 5000
        }
    });
});

app.get("/test-ocr", (req, res) => {
    const inputPath = "temp/test_input.pdf";
    const outputPath = "temp/test_output.pdf";
    
    // Create a dummy PDF using Ghostscript
    const createPdfCmd = `gs -dNOPAUSE -sDEVICE=pdfwrite -sOUTPUTFILE=${inputPath} -c "newpath 100 100 moveto 200 200 lineto stroke showpage" -c quit`;
    
    exec(createPdfCmd, (gsErr, gsStdout, gsStderr) => {
        if (gsErr) {
            return res.status(500).json({
                success: false,
                step: "ghostscript",
                error: gsStderr || gsErr.message
            });
        }
        
        // Run ocrmypdf on the dummy PDF
        exec(`ocrmypdf --skip-text ${inputPath} ${outputPath}`, (ocrErr, ocrStdout, ocrStderr) => {
            // Clean up temp files
            if (fs.existsSync(inputPath)) {
                try { fs.unlinkSync(inputPath); } catch (e) {}
            }
            if (fs.existsSync(outputPath)) {
                try { fs.unlinkSync(outputPath); } catch (e) {}
            }
            
            if (ocrErr) {
                return res.status(500).json({
                    success: false,
                    step: "ocrmypdf",
                    error: ocrStderr || ocrErr.message
                });
            }
            
            res.json({
                success: true,
                message: "OCRmyPDF is fully functional!",
                stdout: ocrStdout.trim(),
                stderr: ocrStderr.trim()
            });
        });
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
