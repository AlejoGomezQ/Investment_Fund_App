import mongoose from "mongoose";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

import User from "../models/user.mjs";
import databaseInstance from "../database.mjs";

dotenv.config();

const users = [
  {
    userId: uuidv4(),
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
    await User.insertMany(users);
  } catch (error) {
    console.error("Error en el proceso de seeding:", error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
};

seedUsers()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error en el proceso de seeding:", error);
    process.exit(1);
  });
