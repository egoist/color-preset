# color-preset [![NPM version](https://img.shields.io/npm/v/color-preset.svg)](https://npmjs.com/package/color-preset) [![NPM downloads](https://img.shields.io/npm/dm/color-preset.svg)](https://npmjs.com/package/color-preset)

> Color preset for PostCSS and Sass developers.

## Install

```bash
$ npm install --save color-preset
```

## Usage

Directly import it in `Sass` or use [postcss-import](https://github.com/postcss/postcss-import) and [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) to work with `PostCSS`.

```css
@import "color-preset";

.title {
  color: $light-green;
  background-color: $gray-400;
}
```

Colors are from [color-lib](https://github.com/egoist/color-lib) which is a set of material design colors.

## License

MIT © [EGOIST](https://github.com/egoist)
