export const uploadPDF = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No PDF Uploaded.",
            });
        }

        res.status(200).json({
            success: true,
            message: "PDF Uploaded Successfully.",
            file: {
                originalName: req.file.originalname,
                fileName: req.file.filename,
                path: req.file.path,
                size: req.file.size,
            },
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};