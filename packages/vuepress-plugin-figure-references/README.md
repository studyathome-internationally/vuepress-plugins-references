# `vuepress-plugin-figure-references`

> [VuePress](https://vuepress.vuejs.org/) plugin for figure referencing with [markdown-it-figure-references](https://www.npmjs.com/package/markdown-it-figure-references).

## Installation

```sh
yarn add vuepress-plugin-figure-references
```

or

```sh
npm install vuepress-plugin-figure-references
```

## Usage

Enable plugin in `.vuepress/config.js`

```js
module.exports = {
  plugins: ["figure-references"]
}
```

or

```js
module.exports = {
  plugins: ["vuepress-plugin-figure-references"]
}
```

or

```js
module.exports = {
  plugins: [["figure-references", opts]]
}
```

The `opts` object can contain:

| Name | Description | Default |
| ---- | ----------- | ------- |

## License

[GPL-3.0](https://github.com/studyathome-internationally/vuepress-plugins/blob/master/LICENSE) &copy; [StudyATHome Internationally](https://github.com/studyathome-internationally/)