import { Router } from "express";
import { Registro } from "../controller/registrocontroller.js";


const router = Router();

router.post("/registro",Registro);


export default router;