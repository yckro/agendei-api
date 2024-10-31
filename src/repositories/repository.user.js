import { query } from "../database/sqlite.js";
async function Listar(name) {

    let filtro = [];

    let sql = "SELECT * FROM doctors ";

    if (name) {
        sql += "WHERE name LIKE ? ";
        filtro.push("%" + name + "%");
    }

    sql = sql + "ORDER BY name;";

    const doctors = await query(sql, filtro);

    return doctors;
}

async function Inserir(name, email, Password) {

    let sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)
    returning id_user`;

    const user = await query(sql, [name, email, Password]);

    return user[0];
}

async function Editar(id_doctor, name, specialty, icon) {

    let sql = `update doctors set name = ?, specialty = ?, icon = ? where id_doctor = ?`;

    await query(sql, [name, specialty, icon, id_doctor]);

return { id_doctor };
}

async function Excluir(id_doctor) {

    let sql = `delete from doctors where id_doctor = ?`;

    await query(sql, [ id_doctor]);

return { id_doctor };
}


export default { Listar, Inserir, Editar, Excluir };