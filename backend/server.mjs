import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import invesmentFundRoutes from "./routes/invesmentFundRoutes.mjs";
import databaseInstance from "./database.mjs";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(json());

databaseInstance
  .connect()
  .then(() => {
    app.use("/api/investment-funds", invesmentFundRoutes);

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar con MongoDB:", error);
  });
