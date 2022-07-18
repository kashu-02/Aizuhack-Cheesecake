import { DataTypes } from "sequelize";
import sequelize from "../db";

export default sequelize.define("Users", {
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
  answer_coord: {
    // 答え(座標)
    type: DataTypes.GEOMETRY("POINT"),
    allowNull: false,
  },
  answer_name: {
    // 答え(名前)
    type: DataTypes.STRING,
    allowNull: false,
  },
});
