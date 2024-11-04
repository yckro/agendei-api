import repoAppointment from "../repositories/repository.appointment.js";
async function Listar(id_user) {
    const appointment = await repoAppointment.Listar(id_user);

    return appointment;
}


export default { Listar  };