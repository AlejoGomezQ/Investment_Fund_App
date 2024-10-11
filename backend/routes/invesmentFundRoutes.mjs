import { Router } from "express";

import { getAllFunds } from "../controllers/fundController.mjs";
import {
  cancelFund,
  changeNotificationPreferences,
  getUserInfo,
  getUserTransactions,
  subscribeToFund,
} from "../controllers/userController.mjs";

const router = Router();

//Obtener todos los fondos de inversión
router.get("/", getAllFunds);

//Obtener todas las transacciones de un usuario
router.get("/:userId", getUserInfo);
router.get("/:userId/transactions", getUserTransactions); //
router.post("/:userId/subscribe", subscribeToFund);
router.post("/:userId/cancel", cancelFund);
router.post("/:userId/notification-preferences", changeNotificationPreferences);

export default router;
