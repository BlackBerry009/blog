---
sidebar_label: ESM 是未来？我们该如何迁移
---

# ESM 是未来？我们该如何迁移

由于远古时代缺乏统一的标准，所以 Node 和 Npm 都采取的CommonJs 规范，而后 2015 年ECMAScript 制定了标准的 ECMA 规范，大量的工具已经开始转向 ESM 的怀抱了，eg: Commander, Chalk, Inquirer   

Node 也稳定支持了 ESM，配置 type:module，exports 字段，mjs 文件等。

前端大佬[sindresorhus](https://github.com/sindresorhus)也着力拥护 ESM，把很多底层工具都改为了 Pure ESM。

## 为什么要迁移至 ESM

ESM 支持静态导出、更好的静态分析、tree-shaking、浏览器本身的支持等等。  

目前，几乎所有的浏览器都支持了 ES6 及 NEXT 的语法，但是为了兼容，还是会打包成 ES5。这也导致了体积大，多余的 polyfill 等配置使运行速度变慢。

所以全面拥抱 ESM 吧！

## 如何迁移
具体参考大佬攻略[sindresorhus](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## 别说了，快带着我写一个


## 参考
> https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c  
> https://nodejs.org/docs/latest-v12.x/api/esm.html#esm_enabling  
> https://nodejs.org/docs/latest-v12.x/api/packages.html#packages_exports_sugar  
> https://web.dev/i18n/en/publish-modern-javascript