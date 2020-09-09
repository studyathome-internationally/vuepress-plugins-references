const plugin = (options, ctx) => {
  const opts = Object.assign({}, plugin.defaults, options);
  opts.options = Object.assign({}, require("markdown-it-figure-references").defaults, options.options);
  return {
    name: "vuepress-plugin-figure-references",
    extendMarkdown: (md) => {
      md.use(require("markdown-it-figure-references"), opts.options);
      md.renderer.rules.figure_reference_list_open = figure_reference_list_open_renderer(opts);
      const defaultRenderer = md.renderer.rules.figure_wrapper;
      md.renderer.rules.figure_wrapper = figure_wrapper_renderer(opts, defaultRenderer);
    },
  };
};

function figure_reference_list_open_renderer(opts) {
  return (tokens, idx /* , options, env, self */) => {
    const token = tokens[idx];
    const title = opts.options.listTitle
      ? `<h2 id="list-of-figures">${
          opts.listHeaderAnchor ? `<a href="#list-of-figures" class="header-anchor">#</a>` : ""
        }${opts.options.listTitle}</h2>\n`
      : "";
    return title + `<${token.tag} class="list-of-figures-list">\n`;
  };
}

function figure_wrapper_renderer(opts, defaultRenderer) {
  if (!opts.wrap || !opts.wrapTag) return defaultRenderer;
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const id = token.meta.targetId;
    const entry = env[opts.options.ns].refs[id];
    const rId = new RegExp('\\s?id="' + id + '"');
    const figure = defaultRenderer(tokens, idx, options, env, self).replace(rId, "");
    if (id && entry) {
      return (
        `<${opts.wrapTag} id="${id}" ${opts.wrapClass ? `class="${opts.wrapClass}"` : ""}>\n` +
        `  ${figure}\n` +
        `</${opts.wrapTag}>`
      );
    }
  };
}

plugin.defaults = {
  listHeaderAnchor: true,
  wrap: true,
  wrapTag: "div",
  wrapClass: "wrapper",
  options: {},
};

module.exports = plugin;
