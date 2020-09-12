const plugin = (options, ctx) => {
  const opts = loadOptions(options);
  opts.options.after = "inline";
  return {
    name: "vuepress-plugin-attribution-references",
    extendMarkdown: (md) => {
      md.use(require("markdown-it-attribution-references"), opts.options);

      if (opts.wrap.enable) {
        md.renderer.rules.attribution_parent_open = attribution_parent_open_renderer(opts);
        md.renderer.rules.attribution_parent_close = attribution_parent_close_renderer(opts);
      }
    },
  };
};

function attribution_parent_open_renderer(opts) {
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const id = token.attrGet("id");
    const className = token.attrGet("class");
    return `<${opts.wrap.tag} id="${id}" class="${opts.wrap.class}">\n<${token.tag} class="${className}">\n`;
  };
}

function attribution_parent_close_renderer(opts) {
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    return `</${token.tag}>\n</${opts.wrap.tag}>`;
  };
}

function loadOptions(options) {
  return options
    ? {
        wrap: Object.assign({}, plugin.defaults.wrap, options.wrap ? options.wrap : {}),
        options: Object.assign({}, plugin.defaults.options, options.options ? options.options : {}),
      }
    : plugin.defaults;
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
