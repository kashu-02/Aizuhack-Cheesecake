import games from "./definitions/games.js";
import groups from "./definitions/groups.js";
import problems from "./definitions/problems.js";
import users from "./definitions/users.js";

export default (database) => {
  [games, groups, problems, users].forEach(async (table) => {
    await database.createTable(table.name, table.options);
  });

  return { games, groups, problems, users };
};
