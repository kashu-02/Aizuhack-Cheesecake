import { DataTypes } from "sequelize";

export default {
  name: "games",
  options: {
    gameid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    problemid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    starttime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
};
