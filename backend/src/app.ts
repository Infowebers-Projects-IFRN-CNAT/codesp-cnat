import express from 'express'
import { Router, Request, Response } from 'express'
const app = express()
const route = Router()
const port: number = 3333
const router = require("./routes/routes")

router(app);

app.use(express.json())

app.use(route)

app.listen(port, () => {console.log('Rodando na porta '+port)})