import { DataTypes } from "sequelize";

export default {
  name: "Problems",
  options: {
    problemid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    problem_statement: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer_latitude: {
      // 答え(緯度)
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    answer_longitude: {
      // 答え(経度)
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    answer_name: {
      // 答え(名前)
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
};
