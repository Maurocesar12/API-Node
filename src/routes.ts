import { Router } from "express";
import * as playerController from "./controllers/players-controlers"

const router = Router();

router.get("/players", playerController.getPlayer);
router.post("/players", playerController.postPlayer)

router.get("/players/:id", playerController.getPlayerById);



export default router;


