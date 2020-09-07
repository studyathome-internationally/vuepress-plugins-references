const plugin = (options, ctx) => {
  const opts = Object.assign({}, plugin.defaults, options);
  return {
    name: "vuepress-plugin-attribution-references",
    extendMarkdown: (md) => {
      md.use(require("markdown-it-attribution-references"), opts);
      md.renderer.rules.attribution_list_open = attribution_list_open_renderer(opts);
    },
  };
};

function attribution_list_open_renderer(opts) {
  return (tokens, idx /* , options, env, self */) => {
    const token = tokens[idx];
    const title = opts.listTitle
      ? `<h2 id="list-of-attributions"><a href="#list-of-attributions" class="header-anchor">#</a>${opts.listTitle}</h2>\n`
      : "";
    return title + `<${token.tag} class="list-of-attributions-list">\n`;
  };
}

plugin.defaults = {
  listTitle: "List of Attributions",
};

module.exports = plugin;
