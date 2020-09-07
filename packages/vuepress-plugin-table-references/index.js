const plugin = (options, ctx) => {
  const opts = Object.assign({}, plugin.defaults, options);
  return {
    name: "vuepress-plugin-table-references",
    extendMarkdown: (md) => {
      md.use(require("markdown-it-table-references"), opts);
      md.renderer.rules.table_reference_list_open = table_reference_list_open_renderer(opts);
    },
  };
};

function table_reference_list_open_renderer(opts) {
  return (tokens, idx /* , options, env, self */) => {
    const token = tokens[idx];
    const title = opts.listTitle
      ? `<h2 id="list-of-tables"><a href="#list-of-tables" class="header-anchor">#</a>${opts.listTitle}</h2>\n`
      : "";
    return title + `<${token.tag} class="list-of-tables-list">\n`;
  };
}

plugin.defaults = {
  listTitle: "List of Tables",
};

module.exports = plugin;
