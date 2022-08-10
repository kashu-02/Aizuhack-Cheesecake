import { DataTypes } from "sequelize";

export default {
  name: "hintquota",
  options: {
    userid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    lasthint: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
};
