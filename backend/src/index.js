import express from 'express'
import { middleware } from './middleware/index.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(middleware)

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))