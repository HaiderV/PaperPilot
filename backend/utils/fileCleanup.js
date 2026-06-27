import fs from "fs/promises";

export const deleteFiles = async (files) => {
    await Promise.all(
        files.map(async (file) => {
            try {
                await fs.unlink(file);
            } catch (err) {
                console.log(`Couldn't delete ${file}`);
            }
        })
    );
};