// eslint-disable-next-line no-unused-vars
export default (event, db) => {
  let message;

  // eslint-disable-next-line prefer-const
  message = {
    type: "text",
    text: event.message.text,
  };

  console.log(message);

  return message;
};
