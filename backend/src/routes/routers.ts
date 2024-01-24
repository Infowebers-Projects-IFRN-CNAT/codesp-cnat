import userRouter from "./user-router"
import routerAutenticacao from "./autenticacao-router"

module.exports = (app: any) => {
    app.use(routerAutenticacao)
    app.use(userRouter)
}