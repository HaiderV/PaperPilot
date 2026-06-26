import fs from "fs";
import path from "path";
import { runOCR } from "../services/ocr.service.js";
import { uploadPDFToCloudinary, deletePDFFromCloudinary } from "../services/cloudinary.service.js";

// Session registry to store association: sessionId -> Set of Cloudinary publicIds
const sessionRegistry = new Map();

const deleteFileSafe = async (filePath) => {
    if (filePath && fs.existsSync(filePath)) {
        try {
            await fs.promises.unlink(filePath);
        } catch (e) {
            console.error(`Failed to delete temp file ${filePath}:`, e);
        }
    }
};

export const uploadPDF = async (req, res) => {
    let localInputPath = req.file?.path;
    let localOutputPath = null;
    let localSidecarPath = null;

    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No PDF uploaded."
            });
        }

        const sessionId = req.body.sessionId || "anonymous";
        const sidecarTextPath = path.join("temp", `text-${Date.now()}.txt`);
        localSidecarPath = sidecarTextPath;

        // Run the OCR process (which will output pdf and text sidecar)
        const result = await runOCR(localInputPath, localSidecarPath);
        localOutputPath = result.outputPath;

        // Read the OCR extracted text from sidecar file
        let extractedText = "";
        if (localSidecarPath && fs.existsSync(localSidecarPath)) {
            extractedText = await fs.promises.readFile(localSidecarPath, "utf-8");
        }

        // Upload searchable PDF to Cloudinary
        const cloudinaryResult = await uploadPDFToCloudinary(localOutputPath);

        // Register the uploaded file's public ID under the session ID
        if (!sessionRegistry.has(sessionId)) {
            sessionRegistry.set(sessionId, new Set());
        }
        sessionRegistry.get(sessionId).add(cloudinaryResult.public_id);

        return res.status(200).json({
            success: true,
            message: "OCR completed successfully and uploaded to Cloudinary.",
            fileUrl: cloudinaryResult.secure_url,
            publicId: cloudinaryResult.public_id,
            extractedText
        });

    } catch (error) {
        console.error("OCR Upload controller error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    } finally {
        // Always delete local temporary files immediately to free up server storage
        await deleteFileSafe(localInputPath);
        await deleteFileSafe(localOutputPath);
        await deleteFileSafe(localSidecarPath);
    }
};

export const cleanupSession = async (req, res) => {
    try {
        // Robust body parsing since sendBeacon sends plain text
        let body = req.body;
        if (typeof body === "string") {
            try {
                body = JSON.parse(body);
            } catch (e) {
                // Ignore parsing errors and keep string as is
            }
        }

        const sessionId = body?.sessionId || req.query.sessionId;

        if (!sessionId) {
            return res.status(400).json({
                success: false,
                message: "Missing sessionId parameter."
            });
        }

        const publicIds = sessionRegistry.get(sessionId);
        if (publicIds && publicIds.size > 0) {
            console.log(`Cleaning up session ${sessionId}: deleting ${publicIds.size} files from Cloudinary...`);
            
            // Delete all associated files from Cloudinary
            const deletionPromises = Array.from(publicIds).map(async (publicId) => {
                try {
                    await deletePDFFromCloudinary(publicId);
                    console.log(`Successfully deleted publicId: ${publicId}`);
                } catch (err) {
                    console.error(`Failed to delete publicId ${publicId}:`, err);
                }
            });

            await Promise.all(deletionPromises);
            sessionRegistry.delete(sessionId);
        }

        return res.status(200).json({
            success: true,
            message: `Session cleanup completed for ${sessionId}.`
        });

    } catch (error) {
        console.error("Cleanup controller error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};