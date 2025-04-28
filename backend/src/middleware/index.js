import express from 'express'
import { route } from './routes.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const middleware = express()

// Torna a pasta 'uploads' acessível publicamente
middleware.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

middleware.use(express.json())
middleware.use(route)

export { middleware }