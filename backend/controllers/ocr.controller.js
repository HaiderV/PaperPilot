import { spawn } from "child_process";
import path from "path";
import fs from "fs";

export const uploadPDF = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No PDF uploaded.",
            });
        }

        const inputPath = req.file.path;
        const outputPath = path.join(
            "temp",
            `ocr-${Date.now()}.pdf`
        );

        console.log("Input:", inputPath);
        console.log("Output:", outputPath);

        const ocr = spawn("ocrmypdf", [
            "--skip-text",
            "--rotate-pages",
            "--deskew",
            "--optimize",
            "1",
            "--output-type",
            "pdf",
            inputPath,
            outputPath,
        ]);

        let stdout = "";
        let stderr = "";

        ocr.stdout.on("data", (data) => {
            stdout += data.toString();
            console.log(data.toString());
        });

        ocr.stderr.on("data", (data) => {
            stderr += data.toString();
            console.log(data.toString());
        });

        ocr.on("close", (code) => {

            console.log("OCR Exit Code:", code);

            if (code !== 0) {
                return res.status(500).json({
                    success: false,
                    message: stderr,
                });
            }

            if (!fs.existsSync(outputPath)) {
                return res.status(500).json({
                    success: false,
                    message: "OCR completed but output PDF not found.",
                });
            }

            return res.status(200).json({
                success: true,
                message: "OCR completed successfully.",
                outputFile: outputPath,
            });

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};