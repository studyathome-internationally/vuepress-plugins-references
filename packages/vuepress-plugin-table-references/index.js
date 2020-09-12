const plugin = (options, ctx) => {
  const opts = loadOptions(options);
  opts.options.after = "inline";
  return {
    name: "vuepress-plugin-table-references",
    extendMarkdown: (md) => {
      md.use(require("markdown-it-table-references"), opts.options);

      if (opts.wrap.enable) {
        md.renderer.rules.figure_table_open = figure_table_open_renderer(opts);
        md.renderer.rules.figure_table_close = figure_table_close_renderer(opts);
      }
    },
  };
};

function figure_table_open_renderer(opts) {
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const id = token.attrGet("id");
    return `<${opts.wrap.tag} id="${id}" class="${opts.wrap.class}">\n<${token.tag}>\n`;
  };
}

function figure_table_close_renderer(opts) {
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    return `</${token.tag}>\n</${opts.wrap.tag}>`;
  };
}

function loadOptions(options) {
  return {
    wrap: Object.assign({}, plugin.defaults.wrap, options.wrap ? options.wrap : {}),
    options: Object.assign({}, plugin.defaults.options, options.options ? options.options : {}),
  };
}

plugin.defaults = {
  wrap: {
    enable: true,
    tag: "div",
    class: "wrapper",
  },
  options: {},
};

module.exports = plugin;
