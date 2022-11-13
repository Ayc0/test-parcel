const { Transformer } = require("@parcel/plugin");

module.exports = new Transformer({
  async loadConfig({ config }) {
    let configFile = await config.getConfig([".mdxrc.js", ".mdxrc.cjs"], {
      packageKey: "mdx",
    });
    if (!configFile) {
      return () => {};
    }
    config.invalidateOnFileChange(configFile.filePath);
    if (typeof configFile.contents === "function") {
      return configFile.contents;
    }
    return () => configFile.contents;
  },

  async transform({ asset, config }) {
    let code = await asset.getCode();

    const { compile } = await import("@mdx-js/mdx");

    // @mdx-js/mdx is a ESM package, so we need to use `import()` to make it work in CJS envs
    let compiled = await compile(code, {
      ...(await config()),
      useDynamicImport: false,
      format: "mdx",
      outputFormat: "program",
    });

    asset.setCode(compiled.toString("utf-8"));
    asset.type = "js";

    return [asset];
  },
});
