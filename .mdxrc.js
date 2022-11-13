module.exports = async () => {
  const { default: gfm } = await import("remark-gfm");
  return {
    remarkPlugins: [gfm],
  };
};
