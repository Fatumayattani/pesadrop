import { Router } from "express";
const router = Router();
import { executeTrade } from "../controllers/tradeController";

// Route to execute a trade
router.post("/execute", executeTrade);

export default router;
