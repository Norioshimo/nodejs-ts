import express, { Application } from "express";
import userRoutes from "../routes/usuarios";
import cors from "cors";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.dbConnection();
    this.middlewares();

    //definir rutas
    this.routes();
  }

  async dbConnection() {
    try {
      console.log('URL_DB: '+process.env.URL_DB);
      await db.authenticate();
      console.log("Conectado a la base de datos.");
    } catch (error) {
      console.log(error)
      throw new Error("Error al conectar a la base de datos. " + error);
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors({}));

    //LECRTURA DEL BODY
    this.app.use(express.json());

    //CARPETAS PUBLIC
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;
