# react-map

react-map 是一个基于 maptalks 封装的地图组件；帮助你轻松的接入地图到 React 项目中。

[![Build Status](https://travis-ci.org/sakitam-gis/react-map.svg?branch=master)](https://www.travis-ci.org/sakitam-gis/react-map)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/@sakitam-gis/react-map/dist/react-map.js?compression=gzip&label=gzip%20size:%20JS)
[![Npm package](https://img.shields.io/npm/v/@sakitam-gis/react-map.svg)](https://www.npmjs.org/package/@sakitam-gis/react-map)
[![GitHub stars](https://img.shields.io/github/stars/sakitam-gis/react-map.svg)](https://github.com/sakitam-gis/react-map/stargazers) [![Greenkeeper badge](https://badges.greenkeeper.io/sakitam-gis/react-map.svg)](https://greenkeeper.io/)

## 特性

- 一个基于maptalks的React组件
- 易用，易扩展，开箱即用。

## 支持环境

* 现代浏览器和 IE9 及以上, 仅仅IE11 支持3D渲染。
* 移动浏览器。
* Electron。

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，
不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，
享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install @sakitam-gis/react-map --save
```

```bash
$ yarn add @sakitam-gis/react-map
```

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `ReactMap`。

我们在 npm 发布包内的 `@sakitam-gis/react-map/dist` 目录下提供了 `react-map.js` `react-map.css`
 以及 `react-map.min.js` `react-map.min.css`。
 或 [UNPKG](https://unpkg.com/@sakitam-gis/react-map/dist/) 进行下载。

## 示例

```jsx
import { Map, TileLayer } from '@sakitam-gis/react-map';
ReactDOM.render(<Map
  className="map-content"
  center={[-0.113049, 51.498568]}
  zoom={zoom}
  events={{
    onload: this.handleMapLoad
  }}
>
  <TileLayer
    id="layer"
    renderer="gl"
    urlTemplate="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
    subdomains={['a', 'b', 'c', 'd']}
  />
</Map>, mountNode)
```

### 引入样式：

```jsx
import '@sakitam-gis/dist/react-map.css';
```


## License
