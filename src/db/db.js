import { Sequelize } from "sequelize";

const { DB_NAME: database, DB_USER: username, DB_PASS: password } = process.env;

export default new Sequelize(database, username, password, {
  host: "localhost:5432",
  dialect: "postgres",
  logging: false,
  operatorsAliases: true,
});
