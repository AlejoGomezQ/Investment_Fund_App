import { Router } from "express";

import { getAllFunds } from "../controllers/fundController.mjs";
import {
  cancelFund,
  getUserInfo,
  getUserTransactions,
  subscribeToFund,
} from "../controllers/userController.mjs";

const router = Router();

//Obtener todos los fondos de inversión
router.get("/funds", getAllFunds);

//Obtener todas las transacciones de un usuario
router.get("/:userId", getUserInfo);
router.get("/:userId/transactions", getUserTransactions); //
router.post("/:userId/subscribe", subscribeToFund);
router.post("/:userId/cancel", cancelFund);

export default router;
