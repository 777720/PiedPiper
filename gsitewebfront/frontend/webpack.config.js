module.exports = function (env) {
  console.log(env);
  return require("./config/" + env + ".js");
};


