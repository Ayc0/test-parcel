const { Bundler } = require("@parcel/plugin");

const DefaultBundler = require("@parcel/bundler-default").default;

const CONFIG = Symbol.for("parcel-plugin-config");

module.exports = new Bundler({
  ...DefaultBundler[CONFIG],
});
