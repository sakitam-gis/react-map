---
order: 0
title: 安装
---

react-map 是一个基于 maptalks 封装的地图组件；帮助你轻松的接入地图到 React 项目中。

---

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

引入样式：

```jsx
import '@sakitam-gis/dist/react-map.css';
```

## 链接

- [首页](https://sakitam-gis.github.io/react-map/)

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](https://github.com/sakitam-gis/react-map/.github/CONTRIBUTING.md)。
如果你希望参与贡献，欢迎 [Pull Request](https://github.com/sakitam-gis/react-map/pulls)，
或给我们 [报告 Bug](https://github.com/sakitam-gis/react-map/issues)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、
  [《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 
  [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、
  [《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。
