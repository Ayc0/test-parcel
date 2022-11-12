const { Bundler } = require("@parcel/plugin");

const DefaultBundler = require("@parcel/bundler-default").default;
const { createAsset } = require("@parcel/core/lib/assetUtils");

const CONFIG = Symbol.for("parcel-plugin-config");

module.exports = new Bundler({
  ...DefaultBundler[CONFIG],
  async bundle({ bundleGraph, config, options, logger }) {
    bundleGraph.createBundle({
      entryAsset: createAsset("hello.html", {
        type: "html",
        isSource: true,
      }),
    });
    DefaultBundler[CONFIG].bundle({ bundleGraph, config, options, logger });
  },
});
