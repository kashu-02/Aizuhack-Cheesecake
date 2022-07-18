import { DataTypes } from "sequelize";

export default {
  name: "users",
  options: {
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
  },
};
