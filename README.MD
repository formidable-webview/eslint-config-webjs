# @formidable-webview/eslint-config-webjs

An eslint configuration to validate scripts injected in WebViews. Thanks to the
awesome
[eslint-plugin-compat](https://www.npmjs.com/package/eslint-plugin-compat),
this config basically makes sure your script can be executed in Android WebView
&ge; 4.1 and iOS Safari WebView &ge; 7.0. It checks both syntax (ECMAScript 5)
and the DOM API. This config is notably meant to be used with
[@formidable-webview/webshell](https://github.com/formidable-webview/webshell#readme)
to implement features.

## Install

```sh
npm install estlint-plugin-compat @formidable-webview/eslint-config-webjs
```

## Setup

After install, edit your `eslint.js` and use the `overrides` attribute to set a special
config for files ending in `.webjs` or whichever arbitrary extension you chose
for your DOM scripts.

```javascript
module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.webjs"],
      extends: "@formidable-webview/eslint-config-webjs",
    },
  ],
};
```

You can override the WebView versions checked by [explicitly setting the
`compat/compat`
rule](https://github.com/amilajack/eslint-plugin-compat/wiki/Advanced-Browserslist-Configs#inline-eslint-config).

