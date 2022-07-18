import games from "./definitions/games";
import groups from "./definitions/groups";
import problems from "./definitions/problems";
import users from "./definitions/users";

export default (database) => {
  [games, groups, problems, users].forEach(async (table) => {
    await database.createTable(table.name, table.options);
  });

  return { games, groups, problems, users };
};
