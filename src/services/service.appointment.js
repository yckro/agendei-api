import repoAppointment from "../repositories/repository.appointment.js";

async function Listar(id_user) {

    const appointments = await repoAppointment.Listar(id_user);

    return appointments;
}

async function Inserir(id_user, id_doctor, id_service,
    booking_date, booking_hour) {

    const appointment = await repoAppointment.Inserir(id_user,
        id_doctor, id_service, booking_date, booking_hour);

    return appointment;
}

export default { Listar, Inserir }