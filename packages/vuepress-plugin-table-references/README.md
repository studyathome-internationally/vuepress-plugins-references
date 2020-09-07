# `vuepress-plugin-table-references`

> [VuePress](https://vuepress.vuejs.org/) plugin for table referencing with [markdown-it-table-references](https://www.npmjs.com/package/markdown-it-table-references).

## Installation

```sh
yarn add vuepress-plugin-table-references
```

or

```sh
npm install vuepress-plugin-table-references
```

## Usage

Enable plugin in `.vuepress/config.js`

```js
module.exports = {
  plugins: ["table-references"]
}
```

or

```js
module.exports = {
  plugins: ["vuepress-plugin-table-references"]
}
```

or

```js
module.exports = {
  plugins: [["table-references", opts]]
}
```

The `opts` object is passed through to [markdown-it-table-references](https://www.npmjs.com/package/markdown-it-table-references) (as is).

## License

[GPL-3.0](https://github.com/studyathome-internationally/vuepress-plugins/blob/master/LICENSE) &copy; [StudyATHome Internationally](https://github.com/studyathome-internationally/)