import { DataTypes } from "sequelize";
import sequelize from "../db";

export default sequelize.define("Users", {
  userid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  groupid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
