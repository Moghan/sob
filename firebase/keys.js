// if (process.env.NODE_ENV === "production") {
if (__DEV__) {
  console.log("DEV is TRUE");
  module.exports = require("./dev");
} else {
  // module.exports = require("./prod");
  module.exports = require("./dev");
  console.log("TODO : keys.js , handle PRODUCTION enviroment");
}