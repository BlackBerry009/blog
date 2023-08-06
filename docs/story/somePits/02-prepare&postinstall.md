---
sidebar_label: prepare 和 postinstall 区别
---
# prepare 和 postinstall 区别

prepare 和 postinstall 都是会在 npm install 后面执行   

但有一点微小的差别  

当安装指定包时，`npm install <package>`，prepare 不会执行，postinstall 会执行。

所以类似 husky install 本地开发配置要在 prepare 阶段。  

阿尼陀佛保佑要在 postinstall 阶段。

##  参考
> https://github.com/typicode/husky/issues/884  
> sorrycc