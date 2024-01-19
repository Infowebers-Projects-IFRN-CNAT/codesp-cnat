const routerAutenticacao = require("./routesAutenticacao");

module.exports = (app: any) => {
    app.use(routerAutenticacao)
}