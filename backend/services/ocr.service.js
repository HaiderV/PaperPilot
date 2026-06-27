import { spawn } from "child_process";
import path from "path";
import fs from "fs";

export const runOCR = (inputPath) => {
    return new Promise((resolve, reject) => {

        const outputPath = path.join(
            "temp",
            `ocr-${Date.now()}.pdf`
        );

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

        let stderr = "";

        ocr.stderr.on("data", (data) => {
            stderr += data.toString();
        });

        ocr.on("close", (code) => {

            if (code !== 0) {
                return reject(new Error(stderr));
            }

            if (!fs.existsSync(outputPath)) {
                return reject(
                    new Error("OCR output file not found.")
                );
            }

            resolve(outputPath);

        });

    });
};