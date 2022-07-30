import { DataTypes } from "sequelize";

export default {
  name: "problems",
  options: {
    problemid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    answer_description: {
      // 答え(説明)
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
};
