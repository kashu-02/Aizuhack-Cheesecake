import { DataTypes } from "sequelize";

export default {
  name: "Users",
  options: {
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
  },
};
