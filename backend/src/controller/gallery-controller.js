import galleryService from '../service/gallery-service.js'
export default {
    list(req, res) {
        const files = galleryService.listFiles(req)
        const host = `${req.protocol}://${req.get('host')}`;

        const resp = files.map((file) => ({
            name: file,
            url: `${host}/uploads/${file}`
        }));
        res.status(200).json(resp)
    },
    findByTitle(req, res) {
        const file = galleryService.findFileByName(req.params.name)
        const host = `${req.protocol}://${req.get('host')}`;
        const resp = !file ? null : { name: file, url: `${host}/uploads/${file}` }
        res.status(200).json(resp)
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