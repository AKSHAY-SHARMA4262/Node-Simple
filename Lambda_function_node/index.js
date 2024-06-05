exports.handler = (event, context, callback) => {
  console.log("hello from lambda function");
  callback(null, "hello from lambda function");
};
