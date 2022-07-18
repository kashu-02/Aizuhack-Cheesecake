import { DataTypes } from "sequelize";
import sequelize from "../db";

export default sequelize.define("Groups", {
  groupid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  gameid: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});
