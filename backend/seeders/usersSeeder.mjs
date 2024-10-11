import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "../models/user.mjs";
import databaseInstance from "../database.mjs";

dotenv.config();

const users = [
  {
    name: "John Doe",
    balance: 500000,
    funds: [],
    transactions: [],
    notificationPreferences: {
      email: "jhondoe@gamil.com",
      sms: "1234567890",
      preferredMethod: "EMAIL",
    },
  },
];

const seedUsers = async () => {
  try {
    await databaseInstance.connect();

    await User.deleteMany({});
    console.log("Datos anteriores eliminados correctamente");

    await User.insertMany(users);
    console.log("Datos de usuarios insertados correctamente");
  } catch (error) {
    console.error("Error en el proceso de seeding:", error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log("Conexión a MongoDB cerrada correctamente");
  }
};

seedUsers()
  .then(() => {
    console.log("Proceso de seeding finalizado correctamente");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error en el proceso de seeding:", error);
    process.exit(1);
  });
