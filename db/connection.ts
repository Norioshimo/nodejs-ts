import { Sequelize } from "sequelize";



const db = new Sequelize(process.env.DB_DATABASE || 'db_prueba_node', process.env.DB_USER || "root", process.env.DB_PASSWORD || "123", {
  host: process.env.DB_URL || 'db',
  dialect: "mysql",
  logging: true,
  port: Number(process.env.DB_PORT) || 3306,
});

export default db;
