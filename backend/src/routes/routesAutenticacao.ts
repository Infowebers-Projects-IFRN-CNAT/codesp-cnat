import { Router } from "express"
const router = Router();

router.get('/registro', (req, res) => {
    console.log('registro');
})

router.get('/login', (req, res) => {
    console.log('login');
})

module.exports = router;