import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "../models/user.mjs";
import databaseInstance from "../database.mjs";

dotenv.config();

const users = [
  {
    userId: 11522345678,
    name: "John Doe",
    email: "jhondoe@gamil.com",
    sms: "1234567890",
    balance: 500000,
    funds: [],
    transactions: [],
    notificationPreferences: "EMAIL",
  },
];

const seedUsers = async () => {
  try {
    await databaseInstance.connect();
    await User.deleteMany({});
    await User.collection.dropIndexes();
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
