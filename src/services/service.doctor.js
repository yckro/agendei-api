import repoDoctor from "../repositories/repository.doctor.js";
async function Listar(name) {
    const doctors = await repoDoctor.Listar(name);

    return doctors;
}

async function Inserir(name, specialty, icon) {
    const doctor = await repoDoctor.Inserir(name, specialty, icon);

    return doctor;
}

export default { Listar , Inserir};