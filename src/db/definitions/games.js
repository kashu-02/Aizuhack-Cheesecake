import { DataTypes } from "sequelize";
import sequelize from "../db";

export default sequelize.define("Users", {
  gameid: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  problemid: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  starttime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
