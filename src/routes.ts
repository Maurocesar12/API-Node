import { Router } from "express";
import { getPlayer } from "./controllers/players-controlers";

const router = Router();

router.get("/players", getPlayer);

export default router;


