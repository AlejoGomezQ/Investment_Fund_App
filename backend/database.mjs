import mongoose from "mongoose";

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (!this.connection) {
      try {
        this.connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("conectado correctamente a MongoDB");
      } catch (error) {
        console.error("Conexión fallida a MongoDB:", error);
        process.exit(1);
      }
    }
    return this.connection;
  }
}

const databaseInstance = new Database();
export default databaseInstance;
