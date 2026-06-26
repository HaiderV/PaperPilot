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
            file: req.file,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};