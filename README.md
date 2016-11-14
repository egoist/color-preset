# color-preset [![NPM version](https://img.shields.io/npm/v/color-preset.svg)](https://npmjs.com/package/color-preset) [![NPM downloads](https://img.shields.io/npm/dm/color-preset.svg)](https://npmjs.com/package/color-preset)

> Color preset for PostCSS and Sass developers.

## Install

```bash
$ npm install --save color-preset
```

## Presets

- [Mateterial](https://material.google.com/style/color.html): [color-preset/material.css](./material.css)
- [Blueprint](http://blueprintjs.com/docs/#colors): [color-preset/blueprint.css](./blueprint.css)

## Usage

Directly import it in `Sass` or use [postcss-import](https://github.com/postcss/postcss-import) and [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) to work with `PostCSS`.

```css
/* choose what preset you want */
@import "color-preset/material.css";

.title {
  color: $light-green;
  background-color: $gray-400;
}
```

## License

MIT © [EGOIST](https://github.com/egoist)
