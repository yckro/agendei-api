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

async function Inserir(name, specialty, icon) {

    let sql = `INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?)
    returning id_doctor`;

    const doctor = await query(sql, [name, specialty, icon]);

    return doctor[0];
}

export default { Listar, Inserir };