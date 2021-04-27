# `vuepress-plugin-attribution-references`

> [VuePress](https://vuepress.vuejs.org/) plugin for attribution referencing with [markdown-it-attribution-references](https://www.npmjs.com/package/markdown-it-attribution-references).

<div>
  <p align="center">
    <img src="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-attribution-references/coverage/badge-branches.svg">
    <img src="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-attribution-references/coverage/badge-functions.svg">
    <img src="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-attribution-references/coverage/badge-lines.svg">
    <img src="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-attribution-references/coverage/badge-statements.svg">
    <a href="https://raw.githubusercontent.com/studyathome-internationally/vuepress-plugins/master/packages/vuepress-plugin-attribution-references/LICENSE" target="_blank">
      <img src="https://badgen.net/github/license/studyathome-internationally/vuepress-plugins">
    </a>
  </p>
</div>

## Installation

```sh
yarn add vuepress-plugin-attribution-references
```

or

```js
module.exports = {
  plugins: ["vuepress-plugin-attribution-references"],
};
```

or

```sh
npm install vuepress-plugin-attribution-references
```

## Usage

Enable plugin in `.vuepress/config.js`

```js
module.exports = {
  plugins: ["attribution-references"],
};
```

or

```js
module.exports = {
  plugins: [["attribution-references", opts]],
};
```

<style>
table { width: 100%;} td:first-child {width: 15%;} td:last-child {width: 45%;}
</style>

The `opts` object can contain:

| Name      | Description                                                                                                              | Default                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `wrap`    | Wrap options.                                                                                     | see below                                                                                                                              |
| `options` | [markdown-it-attribution-references](https://www.npmjs.com/package/markdown-it-figure-references) configuration options. | see [here](https://github.com/studyathome-internationally/markdown-it-plugins/tree/master/packages/markdown-it-attribution-references) |

<br/>

The `wrap` object can contain:

| Name     | Description    | Default     |
| -------- | -------------- | ----------- |
| `enable` | Wrap figure.   | `true`      |
| `tag`    | Wrapper tag.   | `"div"`     |
| `class`  | Wrapper class. | `"wrapper"` |

<br/>

## License

[GPL-3.0](https://github.com/studyathome-internationally/vuepress-plugins/blob/master/LICENSE) &copy; [StudyATHome Internationally](https://github.com/studyathome-internationally/)

```

```
