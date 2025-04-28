import express from 'express'
import { route } from './routes.js'

const middleware = express()

middleware.use(express.json())
middleware.use(route)

export { middleware }