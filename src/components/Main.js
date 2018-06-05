import '../style/index.scss';
import 'maptalks/dist/maptalks.css'
// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import LayerSwitcher from './LayerSwitcher'
import * as maptalks from 'maptalks/dist/maptalks';
class Main extends Component {
  // 初始化页面常量 绑定事件方法
  constructor (props, context) {
    super(props);

    this.state = {
      map: null
    };
  }

  // 初始化地图
  initMap () {
    this.map = new maptalks.Map('map', {
      center: [105.08052356963802, 36.04231948670001],
      zoom: 5,
      minZoom: 1,
      maxZoom: 19,
      spatialReference: {
         projection : 'baidu'
      },
      baseLayer: new maptalks.GroupTileLayer('BaseLayer', [
        new maptalks.TileLayer('Baidu', {
          'urlTemplate' : 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
          'subdomains'  : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }),
        new maptalks.TileLayer('Google', {
          'visible' : false,
          'urlTemplate': 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
        }),
        new maptalks.TileLayer('OSM', {
          'visible' : false,
          'urlTemplate': 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          'subdomains'  : ['a', 'b', 'c']
        })
      ])
    });
    this.setState({
      map: this.map
    })
  }

  // 组件已经加载到dom中
  componentDidMount () {
    setTimeout(() => {
      this.initMap()
    })
  }

  render () {
    return (
      <div>
        <div id="map" className="map-content"></div>
        <LayerSwitcher selectLayerName="Baidu" map={this.state.map}/>
      </div>
    );
  }
}

Main.defaultProps = {};

export default Main;
