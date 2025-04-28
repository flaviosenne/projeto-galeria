import { Router } from "express";
import galleryController from "../controller/gallery-controller.js";
import upload from "../config/storage-config.js";

const route = new Router()

route.post('/gallery', upload.single('file'), galleryController.create)
route.get('/gallery', galleryController.list)
route.get('/gallery/:name', galleryController.findByTitle)
route.delete('/gallery/:name', galleryController.delete)

export { route }