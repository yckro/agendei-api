import bcrypt from "bcrypt";
import repoUser from "../repositories/repository.user.js";
async function Listar(name) {
    const doctors = await repoDoctor.Listar(name);

    return doctors;
}

async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);
    const   user = await repoUser.Inserir(name, email, hashPassword);

    return user;
}

async function Editar(id_doctor, name, specialty, icon) {
    const doctor = await repoDoctor.Editar( id_doctor, name, specialty, icon);

    return doctor;
}

async function Excluir(id_doctor) {
    const doctor = await repoDoctor.Excluir( id_doctor);

    return doctor;
}

export default { Listar , Inserir, Editar,  Excluir };