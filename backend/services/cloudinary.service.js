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
            overwrite: false,
            use_filename: true,
            unique_filename: true,
        });

        return {
            publicId: result.public_id,
            secureUrl: result.secure_url,
        };

    } catch (error) {
        console.error("Cloudinary Error:", error);

        throw new Error(
            JSON.stringify(error, Object.getOwnPropertyNames(error))
        );
    }
};  