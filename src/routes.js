import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";


const router = Router();

// doctors

router.get("/doctors", controllerDoctor.Listar);
router.post("/doctors", controllerDoctor.Inserir);

// Users

// Reservas

// Serviços

export default router;