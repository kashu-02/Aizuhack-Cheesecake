import user from "./user/user.js";
import group from "./group/group.js";

export default (req, res, db) => {
  const { events } = req.body;

  events.forEach((event) => {
    switch (event.source.type) {
      case "user":
        user(event, res, db);
        break;
      case "group":
        group(event, res, db);
        break;
      case "room":
        console.log(`room`);
        break;
      default:
        break;
    }
  });
};
