import serviceDoctor from "../services/service.doctor.js";

async function Listar( req, res ) {

    const name = req.query.name;
    const doctors = await serviceDoctor.Listar(name);
    res.status(200).json(doctors);
}

async function Inserir( req, res ) {
    const{ name, specialty, icon } = req.body;
    const doctor = await serviceDoctor.Inserir(name, specialty, icon);

    res.status(201).json(doctor);
}

export default { Listar, Inserir };