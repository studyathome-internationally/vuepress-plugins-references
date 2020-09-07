const plugin = (options, ctx) => {
  const opts = Object.assign({}, plugin.defaults, options);
  return {
    name: "vuepress-plugin-figure-references",
    extendMarkdown: (md) => {
      md.use(require("markdown-it-figure-references"), opts);
      md.renderer.rules.figure_reference_list_open = figure_reference_list_open_renderer(opts);
    },
  };
};

function figure_reference_list_open_renderer(opts) {
  return (tokens, idx /* , options, env, self */) => {
    const token = tokens[idx];
    const title = opts.listTitle
      ? `<h2 id="list-of-figures"><a href="#list-of-figures" class="header-anchor">#</a>${opts.listTitle}</h2>\n`
      : "";
    return title + `<${token.tag} class="list-of-figures-list">\n`;
  };
}

plugin.defaults = {
  listTitle: "List of Figures",
};

module.exports = plugin;
