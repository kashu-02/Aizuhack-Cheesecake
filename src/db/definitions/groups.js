import { DataTypes } from "sequelize";

export default {
  name: "groups",
  options: {
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
  },
};
