const plugin = (options, ctx) => {
  const opts = Object.assign({}, plugin.defaults.references, options.references);
  const optsFigures = Object.assign({}, plugin.defaults.figures, options.figures);
  const optsTables = Object.assign({}, plugins.defaults.tables, options.tables);
  const optsAttributions = Object.assign({}, plugins.defaults.attributions, options.attributions);
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
    listTitle: "List of Figures",
  },
  tables: {
    listTitle: "List of Tables",
  },
  attributions: {
    listTitle: "List of Attributions",
  },
  references: {},
};

module.exports = plugin;
