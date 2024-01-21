import express from 'express'
import { Router, Request, Response } from 'express'
require('dotenv').config()

const app = express()
const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({"message": 'teste'})
})

app.use(route)

app.listen(3333, ()=> 'servidor rodando em 3333')