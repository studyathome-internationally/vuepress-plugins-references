const plugin = (options, ctx) => {
  const opts = Object.assign({}, plugin.defaults, options);
  opts.options = Object.assign({}, require("markdown-it-attribution-references").defaults, options.options);
  return {
    name: "vuepress-plugin-attribution-references",
    extendMarkdown: (md) => {
      md.use(require("markdown-it-attribution-references"), opts.options);
      md.renderer.rules.attribution_list_open = attribution_list_open_renderer(opts);

      const defaultOpenRenderer = md.renderer.rules.attribution_open;
      md.renderer.rules.attribution_open = attribution_open_renderer(opts, defaultOpenRenderer);

      const defaultCloseRenderer = md.renderer.rules.attribution_close;
      md.renderer.rules.attribution_close = attribution_close_renderer(opts, defaultCloseRenderer);
    },
  };
};

function attribution_list_open_renderer(opts) {
  return (tokens, idx /* , options, env, self */) => {
    const token = tokens[idx];
    const title = opts.options.listTitle
      ? `<h2 id="list-of-attributions">${
          opts.listHeaderAnchor ? `<a href="#list-of-attributions" class="header-anchor">#</a>` : ""
        }${opts.options.listTitle}</h2>\n`
      : "";
    return title + `<${token.tag} class="list-of-attributions-list">\n`;
  };
}

function attribution_open_renderer(opts, defaultRenderer) {
  if (!opts.wrap || !opts.wrapTag) return defaultRenderer;
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const id = token.attrGet("id");
    const attributionOpen = defaultRenderer(tokens, idx, options, env, self);
    if (id) {
      const rId = new RegExp('\\s?id="' + id + '"');
      return `<${opts.wrapTag} id="${id}"${
        opts.wrapClass ? ` class="${opts.wrapClass}"` : ""
      }>${attributionOpen.replace(rId, "")}`;
    }
    return attributionOpen;
  };
}

function attribution_close_renderer(opts, defaultRenderer) {
  if (!opts.wrap || !opts.wrapTag) return defaultRenderer;
  return (tokens, idx, options, env, self) => {
    const attributionClose = defaultRenderer(tokens, idx, options, env, self);
    return attributionClose + `</${opts.wrapTag}>\n`;
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
