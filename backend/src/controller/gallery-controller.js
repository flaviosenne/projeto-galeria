import galleryService from '../service/gallery-service.js'
export default {
    list(req, res) {
        res.status(200).json(galleryService.listFiles())
    },
    findByTitle(req, res) {
        res.status(200).json(galleryService.findFileByName(req.params.name))
    },
    create(req, res) {
        console.log(req.file)
        res.status(201).json({ filename: req.file.filename })
    },
    delete(req, res) {
        const resp = galleryService.deleteFile(req.params.name)
        res.status(resp ? 204 : 404).end()
    }
}