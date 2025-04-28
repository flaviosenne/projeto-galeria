export default {
    list(req, res) {
        res.status(200).json([])
    },
    findByTitle(req, res) {
        res.status(200).json({})
    },
    create(req, res) {
        console.log(req.file)
        res.status(201).json({filename: req.file.filename})
    },
    delete(req, res) {
        res.status(204).end()
    }
}