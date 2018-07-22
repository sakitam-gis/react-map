---
order: 2
category: Examples
subtitle: 图层
title: layer
---

图层相关说明。

## Introduction

图层是maptalks的核心，地图的所有功能都是通过图层来展现：

* 通过`TileLayer`显示基本地图，
* 通过`VectorLayer`加载矢量数据
* 通过`HeatMap`绘制热力图等。

每个图层都是一个独立的系统。

* 独立: 图层之间没有联系
* 系统: 每个图层有自己独立的数据格式, 渲染逻辑, 交互过程, 空间算法等
* 继承: 子图层可以选择性的继承父图层方法, 例如继承数据格式, 但采用新的渲染方式

你可以用图层绘制简单的点线面, 也可以用图层加载复杂的地形数据(terrain DEM data), 也可以用图层绘制复杂的交互动画, 他们都是图层.

## maptalks核心库图层

### TileLayer

[API接口](https://maptalks.github.io/docs/api/TileLayer.html) | [示例](https://maptalks.github.io/docs/examples/cn/index.html#layer,tile-renderer)

瓦片图层用来加载底图瓦片, TileLayer用[[Tile System|tile-system]]([API](https://maptalks.github.io/docs/api/TileSystem.html))来配置不同的瓦片系统

### VectorLayer

[API接口](https://maptalks.github.io/docs/api/VectorLayer.html) | [示例](https://maptalks.github.io/docs/examples/cn/index.html#geometry,point-line-polygon)

VectorLayer用来加载矢量数据, 包括Marker, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, GeometryCollection 和一些扩展图形, 例如Curve, Ellipse, Rectangle等

### CanvasLayer

[API接口](https://maptalks.github.io/docs/api/CanvasLayer.html) | [示例](https://maptalks.github.io/docs/examples/cn/index.html#otherlayer,canvaslayer)

CanvasLayer是绘制在canvas上的图层, 并提供了canvas的绘图接口和相应的接口(prepareToDraw, draw), 方便用户定制自己的canvas绘制逻辑. 它还提供了一些方法用于创建动画.

### ParticleLayer

[API接口](https://maptalks.github.io/docs/api/ParticleLayer.html) | [示例](https://maptalks.github.io/docs/examples/cn/index.html#otherlayer,particlelayer)

ParticleLayer是CanvasLayer的子类, 其在CanvasLayer基础上封装了粒子动画的绘制逻辑, 你只需要实现`getParticles`方法, 既能简单的方便在地图上画出各种粒子动画.

### CanvasTileLayer
[API接口](https://maptalks.github.io/docs/api/CanvasTileLayer.html) | [示例](https://maptalks.github.io/docs/examples/cn/index.html#otherlayer,canvastilelayer)

CanvasTileLayer是TileLayer的子类, 与TileLayer不同的是, 其每个Tile是一个独立的Canvas, 而不是Image.

## 常用的插件图层

### ClusterLayer

[链接](https://github.com/maptalks/maptalks.markercluster)

点聚合图层, 用来在图层上有大量Marker时, 将其聚合起来显示为聚合点, 它是VectorLayer的子类.

### HeatLayer

[链接](https://github.com/maptalks/maptalks.heatmap)

热力图图层, 用来绘制热力图效果

### AnimateMarkerLayer

[链接](https://github.com/maptalks/maptalks.animatemarker)

动画Marker图层, 该图层用来绘制Marker的动画效果

## 其他插件图层

maptalks的插件图层在不停的增加, 你可以在官网随时浏览现在[已有的插件图层](https://maptalks.org/plugins.html#layers).
