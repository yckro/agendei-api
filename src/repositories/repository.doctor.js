import { query } from "../database/sqlite.js";
async function Listar() {

    let sql = "SELECT * FROM doctors ORDER BY name";

    const doctors = await query(sql, []);

    return doctors;
}

export default { Listar };