# `vuepress-plugin-references`

> [VuePress](https://vuepress.vuejs.org/) plugin for referencing images, tables, etc. with [markdown-it-references](https://www.npmjs.com/package/markdown-it-figure-references).

<div>
  <p align="center">
    <img src="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-references/coverage/badge-branches.svg">
    <img src="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-references/coverage/badge-functions.svg">
    <img src="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-references/coverage/badge-lines.svg">
    <img src="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-references/coverage/badge-statements.svg">
    <a href="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-references/LICENSE" target="_blank">
      <img src="https://badgen.net/github/license/studyathome-internationally/vuepress-plugins">
    </a>
  </p>
</div>

## Installation

```sh
yarn add vuepress-plugin-references
```

or

```sh
npm install vuepress-plugin-references
```

## Usage

Enable plugin in `.vuepress/config.js`

```js
module.exports = {
  plugins: ["references"],
};
```

or

```js
module.exports = {
  plugins: ["vuepress-plugin-references"],
};
```

or

```js
module.exports = {
  plugins: [["references", opts]],
};
```

<style>
table { width: 100%;} td:first-child {width: 15%;} td:last-child {width: 45%;}
</style>

The `opts` object can contain:

| Name           | Description                                                                                                                          | Default                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `options`      | [markdown-it-references](https://www.npmjs.com/package/markdown-it-references) configuration option.                                 | see [here](https://github.com/studyathome-internationally/markdown-it-plugins/tree/master/packages/markdown-it-references)              |
| `figures`      | [vuepress-plugin-figure-references](https://www.npmjs.com/package/vuepress-plugin-figure-references) configuration option.           | see [here](https://github.com/studyathome-internationally/vuepress-plugins/tree/master/packages/vuepress-plugin-figure-references)      |
| `tables`       | [vuepress-plugin-table-references](https://www.npmjs.com/package/vuepress-plugin-table-references) configuration option.             | see [here](https://github.com/studyathome-internationally/vuepress-plugins/tree/master/packages/vuepress-plugin-table-references)       |
| `attributions` | [vuepress-plugin-attribution-references](https://www.npmjs.com/package/vuepress-plugin-attribution-references) configuration option. | see [here](https://github.com/studyathome-internationally/vuepress-plugins/tree/master/packages/vuepress-plugin-attribution-references) |

<br/>

## License

[GPL-3.0](https://github.com/studyathome-internationally/vuepress-plugins/blob/master/LICENSE) &copy; [StudyATHome Internationally](https://github.com/studyathome-internationally/)
