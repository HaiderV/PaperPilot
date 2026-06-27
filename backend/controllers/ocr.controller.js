import { runOCR } from "../services/ocr.service.js";

export const uploadPDF = async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No PDF uploaded."
            });
        }

        const { inputPath, outputPath } = await runOCR(req.file.path);

        return res.status(200).json({
            success: true,
            message: "OCR completed successfully.",
            inputPath,
            outputPath,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};