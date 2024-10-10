import mongoose from "mongoose";
import dotenv from "dotenv";

import Fund from "../models/fund.mjs";
import databaseInstance from "../database.mjs";

dotenv.config();

const funds = [
  {
    name: "FPV_BTG_PACTUAL_RECAUDADORA",
    minAmount: 75000,
    category: "FPV",
  },
  {
    name: "FPV_BTG_PACTUAL_ECOPETROL",
    minAmount: 125000,
    category: "FPV",
  },
  {
    name: "DEUDAPRIVADA",
    minAmount: 50000,
    category: "FIC",
  },
  {
    name: "FDO-ACCIONES",
    minAmount: 250000,
    category: "FIC",
  },
  {
    name: "FPV_BTG_PACTUAL_DINAMICA",
    minAmount: 100000,
    category: "FPV",
  },
];

const seedFunds = async () => {
  try {
    await databaseInstance.connect();

    await Fund.deleteMany({});
    console.log("Datos anteriores eliminados correctamente");

    await Fund.insertMany(funds);
    console.log("Datos de fondos insertados correctamente");
  } catch (error) {
    console.error("Error en el proceso de seeding:", error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log("Conexión a MongoDB cerrada correctamente");
  }
};

seedFunds()
  .then(() => {
    console.log("Proceso de seeding finalizado correctamente");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error en el proceso de seeding:", error);
    process.exit(1);
  });
