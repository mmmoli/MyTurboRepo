const withTM = require("next-transpile-modules")(["@myturborepo/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
