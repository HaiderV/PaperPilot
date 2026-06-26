import express from "express";
import { upload } from "../middleware/upload.middleware.js";
import { uploadPDF } from "../controllers/ocr.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "OCR Routes Working"
    })
})

router.post(
    "/upload",
    upload.single("file"),
    uploadPDF
);

export default router;
