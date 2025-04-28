import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const folderPath = path.join(__dirname, '../../uploads');

const galleryService = {

    listFiles: () => {
        try {
            return fs.readdirSync(folderPath);
        } catch (error) {
            return []
        }
    },


    findFileByName: (fileName) => {
        try {
            const files = fs.readdirSync(folderPath);
            return files.find((file) => file.includes(fileName)) || null;
        } catch (error) {
            return null
        }
    },

    deleteFile: (fileName) => {
        const filePath = path.join(folderPath, fileName);
        try {
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error('Erro ao excluir o arquivo: ' + error.message);
        }
    }
};

export default galleryService;