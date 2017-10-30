# nuxt-trailingslash-module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-trailingslash-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-trailingslash-module)
[![npm](https://img.shields.io/npm/dt/nuxt-trailingslash-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-trailingslash-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> A NuxtJS module that makes a 301 redirection to a non trailing slash URL

## Table of Contents ##

* [Requirements](#requirements)
* [Install](#install)
* [Getting Started](#getting-started)

## Requirements

* npm or yarn
* NuxtJS
* NodeJS

## Install

```bash
$ npm install --save nuxt-trailingslash-module
// or
$ yarn add nuxt-trailingslash-module
```

## Getting Started

Add `nuxt-trailingslash-module` to `modules` section of `nuxt.config.js`.
```js
{
  modules: [
    // Simple usage
    'nuxt-trailingslash-module',

    // With options
    ['nuxt-trailingslash-module', {
      /* module options */
      methods: [
        'GET',
        'HEAD',
      ],
    }],
 ]
}
```
or even
```js
{
  modules: [
    'nuxt-trailingslash-module',
  ],
  trailingslash: {
    methods: [
      'GET',
      'HEAD',
    ],
  },
}
```

## License

[MIT License](./LICENSE)
