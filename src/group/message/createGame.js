import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line no-unused-vars
export default (event, db) => {
  console.log(`create`);
  db.groups.create({
    groupid: event.source.groupId,
    gameid: uuidv4(),
  });
};
