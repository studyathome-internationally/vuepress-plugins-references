const plugin = (options, ctx) => {
  const opts = Object.assign({}, plugin.defaults.references, options.references);
  const optsFigures = Object.assign({}, require("markdown-it-figure-references").defaults, options.figures);
  const optsTables = Object.assign({}, require("markdown-it-table-references").defaults, options.tables);
  const optsAttributions = Object.assign(
    {},
    require("markdown-it-attribution-references").defaults,
    options.attributions
  );
  return {
    name: "vuepress-plugin-references",
    plugins: [
      ["figure-references", optsFigures],
      ["table-references", optsTables],
      ["attribution-references", optsAttributions],
    ],
    extendMarkdown: (md) => {
      md.use(require("markdown-it-references"), opts);
    },
  };
};

plugin.defaults = {
  figures: {
    options: {},
  },
  tables: {
    options: {},
  },
  attributions: {
    options: {},
  },
  references: {},
};

module.exports = plugin;
