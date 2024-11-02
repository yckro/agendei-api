import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import jwt from "./token.js";


const router = Router();

// doctors

router.get("/doctors", jwt.validateToken, controllerDoctor.Listar);
router.post("/doctors", jwt.validateToken, controllerDoctor.Inserir);
router.put("/doctors/:id_doctor", jwt.validateToken, controllerDoctor.Editar);
router.delete("/doctors/:id_doctor", jwt.validateToken, controllerDoctor.Excluir);
// Serviços
router.get("/doctors/:id_doctor/services", jwt.validateToken, controllerDoctor.ListarServicos);

// Users

router.post("/users/register", controllerUser.Inserir);
router.post("/users/login", controllerUser.Login);

// Reservas

router.get("/appointments", jwt.validateToken, controllerAppointment.Listar);



export default router;