# `vuepress-plugin-attribution-references`

> [VuePress](https://vuepress.vuejs.org/) plugin for attribution referencing with [markdown-it-attribution-references](https://www.npmjs.com/package/markdown-it-attribution-references).

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
  plugins: ["table-attribution"],
};
```

or

```js
module.exports = {
  plugins: [["table-attribution", opts]],
};
```

<style>
table { width: 100%;} td:first-child {width: 15%;} td:last-child {width: 45%;}
</style>

The `opts` object can contain:

| Name      | Description                                                                                                              | Default                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `wrap`    | Rule name to insert new rules after.                                                                                     | see below                                                                                                                              |
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
