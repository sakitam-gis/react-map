webpackJsonp(["examples/layer/index.md"],{pzBD:function(a,e){a.exports={content:["article",["p","\u56fe\u5c42\u76f8\u5173\u8bf4\u660e\u3002"],["h2","Introduction"],["p","\u56fe\u5c42\u662fmaptalks\u7684\u6838\u5fc3\uff0c\u5730\u56fe\u7684\u6240\u6709\u529f\u80fd\u90fd\u662f\u901a\u8fc7\u56fe\u5c42\u6765\u5c55\u73b0\uff1a"],["ul",["li",["p","\u901a\u8fc7",["code","TileLayer"],"\u663e\u793a\u57fa\u672c\u5730\u56fe\uff0c"]],["li",["p","\u901a\u8fc7",["code","VectorLayer"],"\u52a0\u8f7d\u77e2\u91cf\u6570\u636e"]],["li",["p","\u901a\u8fc7",["code","HeatMap"],"\u7ed8\u5236\u70ed\u529b\u56fe\u7b49\u3002"]]],["p","\u6bcf\u4e2a\u56fe\u5c42\u90fd\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u7cfb\u7edf\u3002"],["ul",["li",["p","\u72ec\u7acb: \u56fe\u5c42\u4e4b\u95f4\u6ca1\u6709\u8054\u7cfb"]],["li",["p","\u7cfb\u7edf: \u6bcf\u4e2a\u56fe\u5c42\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u6570\u636e\u683c\u5f0f, \u6e32\u67d3\u903b\u8f91, \u4ea4\u4e92\u8fc7\u7a0b, \u7a7a\u95f4\u7b97\u6cd5\u7b49"]],["li",["p","\u7ee7\u627f: \u5b50\u56fe\u5c42\u53ef\u4ee5\u9009\u62e9\u6027\u7684\u7ee7\u627f\u7236\u56fe\u5c42\u65b9\u6cd5, \u4f8b\u5982\u7ee7\u627f\u6570\u636e\u683c\u5f0f, \u4f46\u91c7\u7528\u65b0\u7684\u6e32\u67d3\u65b9\u5f0f"]]],["p","\u4f60\u53ef\u4ee5\u7528\u56fe\u5c42\u7ed8\u5236\u7b80\u5355\u7684\u70b9\u7ebf\u9762, \u4e5f\u53ef\u4ee5\u7528\u56fe\u5c42\u52a0\u8f7d\u590d\u6742\u7684\u5730\u5f62\u6570\u636e(terrain DEM data), \u4e5f\u53ef\u4ee5\u7528\u56fe\u5c42\u7ed8\u5236\u590d\u6742\u7684\u4ea4\u4e92\u52a8\u753b, \u4ed6\u4eec\u90fd\u662f\u56fe\u5c42."],["h2","maptalks\u6838\u5fc3\u5e93\u56fe\u5c42"],["h3","TileLayer"],["p",["a",{title:null,href:"https://maptalks.github.io/docs/api/TileLayer.html"},"API\u63a5\u53e3"]," | ",["a",{title:null,href:"https://maptalks.github.io/docs/examples/cn/index.html#layer,tile-renderer"},"\u793a\u4f8b"]],["p","\u74e6\u7247\u56fe\u5c42\u7528\u6765\u52a0\u8f7d\u5e95\u56fe\u74e6\u7247, TileLayer\u7528",["a",{title:null,href:"[API](https://maptalks.github.io/docs/api/TileSystem.html)"},"[Tile System|tile-system]"],"\u6765\u914d\u7f6e\u4e0d\u540c\u7684\u74e6\u7247\u7cfb\u7edf"],["h3","VectorLayer"],["p",["a",{title:null,href:"https://maptalks.github.io/docs/api/VectorLayer.html"},"API\u63a5\u53e3"]," | ",["a",{title:null,href:"https://maptalks.github.io/docs/examples/cn/index.html#geometry,point-line-polygon"},"\u793a\u4f8b"]],["p","VectorLayer\u7528\u6765\u52a0\u8f7d\u77e2\u91cf\u6570\u636e, \u5305\u62ecMarker, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, GeometryCollection \u548c\u4e00\u4e9b\u6269\u5c55\u56fe\u5f62, \u4f8b\u5982Curve, Ellipse, Rectangle\u7b49"],["h3","CanvasLayer"],["p",["a",{title:null,href:"https://maptalks.github.io/docs/api/CanvasLayer.html"},"API\u63a5\u53e3"]," | ",["a",{title:null,href:"https://maptalks.github.io/docs/examples/cn/index.html#otherlayer,canvaslayer"},"\u793a\u4f8b"]],["p","CanvasLayer\u662f\u7ed8\u5236\u5728canvas\u4e0a\u7684\u56fe\u5c42, \u5e76\u63d0\u4f9b\u4e86canvas\u7684\u7ed8\u56fe\u63a5\u53e3\u548c\u76f8\u5e94\u7684\u63a5\u53e3(prepareToDraw, draw), \u65b9\u4fbf\u7528\u6237\u5b9a\u5236\u81ea\u5df1\u7684canvas\u7ed8\u5236\u903b\u8f91. \u5b83\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u52a8\u753b."],["h3","ParticleLayer"],["p",["a",{title:null,href:"https://maptalks.github.io/docs/api/ParticleLayer.html"},"API\u63a5\u53e3"]," | ",["a",{title:null,href:"https://maptalks.github.io/docs/examples/cn/index.html#otherlayer,particlelayer"},"\u793a\u4f8b"]],["p","ParticleLayer\u662fCanvasLayer\u7684\u5b50\u7c7b, \u5176\u5728CanvasLayer\u57fa\u7840\u4e0a\u5c01\u88c5\u4e86\u7c92\u5b50\u52a8\u753b\u7684\u7ed8\u5236\u903b\u8f91, \u4f60\u53ea\u9700\u8981\u5b9e\u73b0",["code","getParticles"],"\u65b9\u6cd5, \u65e2\u80fd\u7b80\u5355\u7684\u65b9\u4fbf\u5728\u5730\u56fe\u4e0a\u753b\u51fa\u5404\u79cd\u7c92\u5b50\u52a8\u753b."],["h3","CanvasTileLayer"],["p",["a",{title:null,href:"https://maptalks.github.io/docs/api/CanvasTileLayer.html"},"API\u63a5\u53e3"]," | ",["a",{title:null,href:"https://maptalks.github.io/docs/examples/cn/index.html#otherlayer,canvastilelayer"},"\u793a\u4f8b"]],["p","CanvasTileLayer\u662fTileLayer\u7684\u5b50\u7c7b, \u4e0eTileLayer\u4e0d\u540c\u7684\u662f, \u5176\u6bcf\u4e2aTile\u662f\u4e00\u4e2a\u72ec\u7acb\u7684Canvas, \u800c\u4e0d\u662fImage."],["h2","\u5e38\u7528\u7684\u63d2\u4ef6\u56fe\u5c42"],["h3","ClusterLayer"],["p",["a",{title:null,href:"https://github.com/maptalks/maptalks.markercluster"},"\u94fe\u63a5"]],["p","\u70b9\u805a\u5408\u56fe\u5c42, \u7528\u6765\u5728\u56fe\u5c42\u4e0a\u6709\u5927\u91cfMarker\u65f6, \u5c06\u5176\u805a\u5408\u8d77\u6765\u663e\u793a\u4e3a\u805a\u5408\u70b9, \u5b83\u662fVectorLayer\u7684\u5b50\u7c7b."],["h3","HeatLayer"],["p",["a",{title:null,href:"https://github.com/maptalks/maptalks.heatmap"},"\u94fe\u63a5"]],["p","\u70ed\u529b\u56fe\u56fe\u5c42, \u7528\u6765\u7ed8\u5236\u70ed\u529b\u56fe\u6548\u679c"],["h3","AnimateMarkerLayer"],["p",["a",{title:null,href:"https://github.com/maptalks/maptalks.animatemarker"},"\u94fe\u63a5"]],["p","\u52a8\u753bMarker\u56fe\u5c42, \u8be5\u56fe\u5c42\u7528\u6765\u7ed8\u5236Marker\u7684\u52a8\u753b\u6548\u679c"],["h2","\u5176\u4ed6\u63d2\u4ef6\u56fe\u5c42"],["p","maptalks\u7684\u63d2\u4ef6\u56fe\u5c42\u5728\u4e0d\u505c\u7684\u589e\u52a0, \u4f60\u53ef\u4ee5\u5728\u5b98\u7f51\u968f\u65f6\u6d4f\u89c8\u73b0\u5728",["a",{title:null,href:"https://maptalks.org/plugins.html#layers"},"\u5df2\u6709\u7684\u63d2\u4ef6\u56fe\u5c42"],"."]],meta:{order:2,category:"Examples",subtitle:"\u56fe\u5c42",title:"layer",filename:"examples/layer/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Introduction",title:"Introduction"},"Introduction"]],["li",["a",{className:"bisheng-toc-h2",href:"#maptalks\u6838\u5fc3\u5e93\u56fe\u5c42",title:"maptalks\u6838\u5fc3\u5e93\u56fe\u5c42"},"maptalks\u6838\u5fc3\u5e93\u56fe\u5c42"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5e38\u7528\u7684\u63d2\u4ef6\u56fe\u5c42",title:"\u5e38\u7528\u7684\u63d2\u4ef6\u56fe\u5c42"},"\u5e38\u7528\u7684\u63d2\u4ef6\u56fe\u5c42"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5176\u4ed6\u63d2\u4ef6\u56fe\u5c42",title:"\u5176\u4ed6\u63d2\u4ef6\u56fe\u5c42"},"\u5176\u4ed6\u63d2\u4ef6\u56fe\u5c42"]]]}}});