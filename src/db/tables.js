import games from "./definitions/games.js";
import groups from "./definitions/groups.js";
import problems from "./definitions/problems.js";
import users from "./definitions/users.js";

export default (database) => {
  [games, groups, problems, users].forEach((table) => {
    database.createTable(table.name, table.options);
  });

  database.groups.hasMany(database.users);
  database.users.belongsTo(database.groups);
  database.games.hasOne(database.groups);
  database.groups.belongsTo(database.games);
  database.games.hasOne(database.problems);

  database.sync();

  return { games, groups, problems, users };
};
