import { Sequelize } from "sequelize";

const db = new Sequelize("db_prueba_node", "root", "123", {
  host: "localhost",
  dialect: "mysql",
  logging: true ,
  port: 3307,
});

export default db;
