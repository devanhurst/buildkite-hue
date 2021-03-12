exports.handler = async (event) => {
  // uploaded from console
  console.log(event);

  const response = {
    statusCode: 200,
    body: event,
  };
  return response;
};
