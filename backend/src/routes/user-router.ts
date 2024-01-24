import express from "express";
import User from "../models/user";
import userRepository from "../repositories/user-repository";
const userRouter = express.Router()

userRouter.post('/users', (req, res) => {
    const user: User = req.body
    userRepository.post(user, (id) => {
        if (id) {
            res.status(201).location(`/user/${id}`).send()
        }
        else {
            res.status(400).send()
        }
    })
})

userRouter.get('/users', (req, res) => {
    userRepository.getAll((users) => res.json(users))
})

userRouter.get('/user/:id', (req, res) => {
    const id: number = +req.params.id
    userRepository.get(id, (user) => {
        if (user) {
            res.json(user)
        }
        else {
            res.status(404).send()
        }
    })
})

userRouter.put('/user/:id', (req, res) => {
    const id: number = +req.params.id
    userRepository.put(id, req.body, (notFound) => {
        if (notFound) {
            res.status(404).send()
        }
        else {
            res.status(204).send()
        }
    })
})

userRouter.delete('/user/:id', (req, res) => {
    const id: number = +req.params.id
    userRepository.delete(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        }
        else {
            res.status(204).send()
        }
    })
})

export default userRouter