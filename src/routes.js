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

// Users

router.post("/users/register", controllerUser.Inserir);
router.post("/users/login", controllerUser.Login);

// Reservas

// Serviços

export default router;