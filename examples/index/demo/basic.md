---
order: 0
title: 基础使用
---

## summary

地图基本展示。

````jsx
import { Map, TileLayer } from '@sakitam-gis/react-map'
class Index extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      zoom: 14
    };
  }

  // 组件已经加载到dom中
  componentDidMount () {
  }

  handleMapLoad = (map, event) => {
    console.log(map, event);
  };

  render () {
    const { zoom } = this.state;
    return (
      <Map
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
      </Map>
    );
  }
}

ReactDOM.render(
  <Index />
, mountNode);
````

<style>
.map-content {
  width: 100%;
  height: 300px;
}
</style>