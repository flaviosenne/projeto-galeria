import express from 'express'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use('/teste', (req, res) => {
    res.json({ msg: 'Teste de api' })
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))