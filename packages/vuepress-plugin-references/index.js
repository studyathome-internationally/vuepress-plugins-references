const plugin = (options, ctx) => {
  opts = loadOptions(options);

  return {
    name: "vuepress-plugin-references",
    plugins: [
      ["attribution-references", opts.attributions],
      ["table-references", opts.tables],
      ["figure-references", opts.figures],
    ],
    extendMarkdown: (md) => {
      md.use(require("markdown-it-references"), opts.options);
    },
  };
};

function loadOptions(options) {
  return options
    ? {
        options: Object.assign({}, plugin.defaults.options, options.options ? options.options : {}),
        figures: Object.assign({}, plugin.defaults.figures, options.figures ? options.figures : {}),
        tables: Object.assign({}, plugin.defaults.tables, options.tables ? options.tables : {}),
        attributions: Object.assign({}, plugin.defaults.attributions, options.attributions ? options.attributions : {}),
      }
    : plugin.defaults;
}

plugin.defaults = {
  options: {},
  figures: {},
  tables: {},
  attributions: {},
};

module.exports = plugin;
