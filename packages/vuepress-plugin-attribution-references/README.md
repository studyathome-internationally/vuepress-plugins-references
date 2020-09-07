# `vuepress-plugin-attribution-references`

> [VuePress](https://vuepress.vuejs.org/) plugin for attribution referencing with [markdown-it-attribution-references](https://www.npmjs.com/package/markdown-it-attribution-references).

## Installation

```sh
yarn add vuepress-plugin-attribution-references
```

or

```js
module.exports = {
  plugins: ["vuepress-plugin-attribution-references"]
}
```

or

```sh
npm install vuepress-plugin-attribution-references
```

## Usage

Enable plugin in `.vuepress/config.js`

```js
module.exports = {
  plugins: ["table-attribution"]
}
```

or

```js
module.exports = {
  plugins: [["table-attribution", opts]]
}
```

The `opts` object is passed through to [markdown-it-attribution-references](https://www.npmjs.com/package/markdown-it-attribution-references) (as is).

## License

[GPL-3.0](https://github.com/studyathome-internationally/vuepress-plugins/blob/master/LICENSE) &copy; [StudyATHome Internationally](https://github.com/studyathome-internationally/)
```
