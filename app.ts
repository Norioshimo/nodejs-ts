import dotenv from "dotenv";
import Server from "./models/server";

//Configurar env
dotenv.config();

const server = new Server(); 
server.listen();
