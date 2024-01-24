import sqlite3 from "sqlite3";
const DBSOURCE = 'db.sqlite'

const SQL_USERS_CREATE = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        matricula VARCHAR(14) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        tipo VARCHAR(255) NOT NULL,
        telefone VARCHAR(255) NOT NULL,
        senha VARCHAR(255) NOT NULL,
        ultimo_login DATE NOT NULL,
        ultima_alteracao DATE NOT NULL,
        data_registro DATE NOT NULL
    )`

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err)
        throw err
    }
    else {
        console.log('Base de dados conectada')
        database.run(SQL_USERS_CREATE, (err) => {
            if (err) {
                console.log(err)
                throw err
            }
            else {
                console.log('Tabela criada com sucesso')
            }
        })
    }
})

export default database