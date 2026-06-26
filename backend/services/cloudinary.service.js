import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadPDFToCloudinary = async (filePath) => {
    try {

        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: "raw",
            folder: "paperpilot/ocr",
            use_filename: true,
            unique_filename: true,
        });

        return result;

    } catch (error) {

        throw new Error(`Cloudinary Upload Failed: ${error.message}`);

    }
};

export const deletePDFFromCloudinary = async (publicId) => {
    try {

        const result = await cloudinary.uploader.destroy(publicId, {
            resource_type: "raw",
        });

        return result;

    } catch (error) {

        throw new Error(`Cloudinary Delete Failed: ${error.message}`);

    }
};