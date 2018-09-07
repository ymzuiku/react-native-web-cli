## 功能

- 一键生成支持 React-Native 和 React-Native-Web 的项目
- 使用 react-native-cli 创建最新的 react-native 项目
- 默认配置好 Typescript 环境, 只需要把文件后缀改为 .tsx 即可; Web 端和 Native 端均支持。
- 使用 WebpackDll 把 package.json 中的 dll 标记过得第三方库进行预先打包，减少平时开发期间的编译时间
- 内置一个基于 react-router 的跨平台 Navigation 组件
    - 永远只保留了一个层级，可以进行二次开发保留多个层级
    - 同步url地址和 react-router
    - react-router4 的所有功能均可使用
    - 支持Web端的左滑返回（Native端还未实现）
- 预先设置好了Redux配合Immutable的基础模板，不使用Redux可以自行删除

## 先决条件
确保已安装以下环境：

- nodejs > 8.9
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

```sh
yarn web # run react
yarn ios # run react-native of ios
```