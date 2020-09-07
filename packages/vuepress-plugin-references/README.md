# `vuepress-plugin-references`

> [VuePress](https://vuepress.vuejs.org/) plugin for referencing images, tables, etc. with [markdown-it-references](https://www.npmjs.com/package/markdown-it-figure-references).

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
  plugins: ["references"]
}
```

or

```js
module.exports = {
  plugins: ["vuepress-plugin-references"]
}
```

or

```js
module.exports = {
  plugins: [["references", opts]]
}
```

The `opts` object can contain:

| Name           | Description                                                                                                           | Default                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `references`   | [markdown-it-references](https://www.npmjs.com/package/markdown-it-references) configuration.                         | `{ }`                                   |
| `figures`      | [markdown-it-figure-references](https://www.npmjs.com/package/markdown-it-figure-references) configuration.           | `{ listTitle: "List of Figures" }`      |
| `tables`       | [markdown-it-table-references](https://www.npmjs.com/package/markdown-it-table-references) configuration.             | `{ listTitle: "List of Tables" }`       |
| `attributions` | [markdown-it-attribution-references](https://www.npmjs.com/package/markdown-it-attribution-references) configuration. | `{ listTitle: "List of Attributions" }` |

**NOTE**  
Invidiual configuration objects are passed through to the respective markdown-it plugins.

## License

[GPL-3.0](https://github.com/studyathome-internationally/vuepress-plugins/blob/master/LICENSE) &copy; [StudyATHome Internationally](https://github.com/studyathome-internationally/)