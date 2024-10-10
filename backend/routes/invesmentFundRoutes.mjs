import { Router } from "express";

import { getAllFunds } from "../controllers/fundController.mjs";

const router = Router();

router.get("/", getAllFunds);

export default router;
