import { Router } from "express"
const routerAutenticacao = Router();

routerAutenticacao.get('/registro', (req, res) => {
    console.log('registro');
})

routerAutenticacao.get('/login', (req, res) => {
    console.log('login');
})

export default routerAutenticacao