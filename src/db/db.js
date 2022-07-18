import { Sequelize } from "sequelize";

// const {
//   DB_NAME: database,
//   DB_USER: username,
//   DB_PASS: password,
//   DB_HOST: host,
// } = process.env;

// export default new Sequelize(database, username, password, {
//  host: `${host}:5432`,
//  dialect: "postgres",
//  logging: true,
//  operatorsAliases: true,
// });

export default class Database {
  tables = [];

  constructor(database, username, password, options) {
    this.sequelize = new Sequelize(database, username, password, options);
  }

  async authenticate() {
    await this.sequelize.authenticate();
  }

  async createTable(tableName, options) {
    const table = this.sequelize.define(tableName, options);
    await table.sync({ force: true });

    this.tables.push(table);
    return table;
  }
}
