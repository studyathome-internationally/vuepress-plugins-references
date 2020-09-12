const plugin = (options, ctx) => {
  const opts = loadOptions(options);
  opts.options.after = "inline";
  return {
    name: "vuepress-plugin-figure-references",
    extendMarkdown: (md) => {
      md.use(require("markdown-it-figure-references"), opts.options);

      if (opts.wrap.enable) {
        md.renderer.rules.figure_image_open = figure_image_open_renderer(opts);
        md.renderer.rules.figure_image_close = figure_image_close_renderer(opts);
      } else {
        const defaultImageRenderer = md.renderer.rules.image;
        md.renderer.rules.image = image_renderer(opts, defaultImageRenderer);
      }
    },
  };
};

function figure_image_open_renderer(opts) {
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const id = token.attrGet("id");
    return `<${opts.wrap.tag} id="${id}" class="${opts.wrap.class}">\n<${token.tag}>\n`;
  };
}

function figure_image_close_renderer(opts) {
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    return `</${token.tag}>\n</${opts.wrap.tag}>`;
  };
}

function image_renderer(opts, renderer) {
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const id = token.attrGet("id");
    const image = renderer(tokens, idx, options, env, self).replace(`id="${id}"`, "");
    return `<${opts.wrap.tag} id="${id}" class="${opts.wrap.class}">${image}</${opts.wrap.tag}>`;
  };
}

function loadOptions(options) {
  return {
    wrap: Object.assign({}, plugin.defaults.wrap, typeof options.wrap === "boolean" ? options.wrap : {}),
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
