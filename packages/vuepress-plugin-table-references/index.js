const plugin = (options, ctx) => {
  const opts = Object.assign({}, plugin.defaults, options);
  opts.options = Object.assign({}, require("markdown-it-table-references").defaults, options.options);
  return {
    name: "vuepress-plugin-table-references",
    extendMarkdown: (md) => {
      md.use(require("markdown-it-table-references"), opts.options);
      md.renderer.rules.table_reference_list_open = table_reference_list_open_renderer(opts);

      const defaultOpenRenderer = md.renderer.rules.table_wrapper_open;
      md.renderer.rules.table_wrapper_open = table_wrapper_open_renderer(opts, defaultOpenRenderer);

      const defaultCloseRenderer = md.renderer.rules.table_wrapper_close;
      md.renderer.rules.table_wrapper_close = table_wrapper_close_renderer(opts, defaultCloseRenderer);
    },
  };
};

function table_reference_list_open_renderer(opts) {
  return (tokens, idx /* , options, env, self */) => {
    const token = tokens[idx];
    const title = opts.options.listTitle
      ? `<h2 id="list-of-tables">${
          opts.listHeaderAnchor ? `<a href="#list-of-tables" class="header-anchor">#</a>` : ""
        }${opts.options.listTitle}</h2>\n`
      : "";
    return title + `<${token.tag} class="list-of-tables-list">\n`;
  };
}

function table_wrapper_open_renderer(opts, defaultRenderer) {
  if (!opts.wrap || !opts.wrapTag) return defaultRenderer;
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const id = token.attrGet("id");
    const rId = new RegExp('\\s?id="' + id + '"');
    const figureOpen = defaultRenderer(tokens, idx, options, env, self).replace(rId, "");
    if (id) {
      return `<${opts.wrapTag} id="${id}"${opts.wrapClass ? ` class="${opts.wrapClass}"` : ""}>${figureOpen}`;
    }
  };
}

function table_wrapper_close_renderer(opts, defaultRenderer) {
  if (!opts.wrap || !opts.wrapTag) return defaultRenderer;
  return (tokens, idx, options, env, self) => {
    const figureClose = defaultRenderer(tokens, idx, options, env, self);
    return figureClose + `</${opts.wrapTag}>\n`;
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
