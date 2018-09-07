## 功能

- 一键生成支持 React-Native 和 React-Native-Web 的项目
- 使用 react-native-cli 创建最新的 react-native 项目
- 默认配置好 Typescript 环境, 只需要把文件后缀改为 .tsx 即可; Web 端和 Native 端均支持。
- 使用 WebpackDll 把 package.json 中的 dll 标记过得第三方库进行预先打包，减少平时开发期间的编译时间
- 内置一个基于 react-router 的跨平台 Navigation 组件
  - 兼容 React-Native 和 React
  - 同步 url 地址
  - 支持 Web 端的左滑返回（Native 端还未实现）
- 预先设置好了 Redux 配合 Immutable 的基础模板，不使用 Redux 可以自行删除
- 配置好 eslint 进行检查，并且 git commit 时会进行 eslint 校验

## 先决条件

确保已安装以下环境：

- nodejs >= 8.9
- yarn
- react-native-cli

## 安装

```sh
npm i -g rnw
```

## 创建项目

```sh
rnw HelloReactNativeWeb
```

## 运行项目

运行 react

```sh
yarn web
```

运行 react-native of ios

```sh
yarn ios
```

## 仓库地址

[https://github.com/ymzuiku/react-native-web-cli](https://github.com/ymzuiku/react-native-web-cli)
