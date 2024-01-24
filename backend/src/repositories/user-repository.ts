import User from "../models/user";
import database from "./database";

const userRepository = {
    post: (user: User, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO users (matricula, nome, email, tipo, telefone, senha, ultimo_login, ultima_alteracao, data_registro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        const params = [user.matricula, user.nome, user.email, user.tipo, user.telefone, user.senha, user.ultimo_login, user.ultima_alteracao, user.data_registro]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },

    getAll: (callback: (users: User[]) => void) => {
        const sql = 'SELECT * FROM users'
        const params: any[] = []
        database.all(sql, params, (_err, rows: User[]) => callback(rows))
    },

    get: (id: number, callback: (user?: User) => void) => {
        const sql = 'SELECT * FROM itens WHERE id = ?'
        const params = [id]
        database.get(sql, params, (_err, row: User) => callback(row))
    },

    put: (id: number, user: User, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE users SET matricula = ?, nome = ?, email = ?, tipo = ?, telefone = ?, senha = ?, ultimo_login = ?, ultima_alteracao = ?, data_registro = ? WHERE id = ?'
        const params = [user.matricula, user.nome, user.email, user.tipo, user.telefone, user.senha, user.ultimo_login, user.ultima_alteracao, user.data_registro, id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },

    delete: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM users WHERE id = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    }
}

export default userRepository