import mongoose from "mongoose";
import dotenv from "dotenv";

import Fund from "../models/fund.mjs";
import databaseInstance from "../database.mjs";

dotenv.config();

const funds = [
  {
    fundId: 1,
    name: "FPV_BTG_PACTUAL_RECAUDADORA",
    minAmount: 75000,
    category: "FPV",
  },
  {
    fundId: 2,
    name: "FPV_BTG_PACTUAL_ECOPETROL",
    minAmount: 125000,
    category: "FPV",
  },
  {
    fundId: 3,
    name: "DEUDAPRIVADA",
    minAmount: 50000,
    category: "FIC",
  },
  {
    fundId: 4,
    name: "FDO-ACCIONES",
    minAmount: 250000,
    category: "FIC",
  },
  {
    fundId: 5,
    name: "FPV_BTG_PACTUAL_DINAMICA",
    minAmount: 100000,
    category: "FPV",
  },
];

const seedFunds = async () => {
  try {
    await databaseInstance.connect();
    await Fund.deleteMany({});
    await Fund.insertMany(funds);
  } catch (error) {
    console.error("Error en el proceso de seeding:", error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
};

seedFunds()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    process.exit(1);
  });
