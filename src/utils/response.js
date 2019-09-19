const response = (res, statusCode, message, data) => res
  .status(statusCode).send({
    statusCode,
    data,
    message,
  });

export default response;
