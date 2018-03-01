import '../style/index.scss';
import 'maptalks/dist/maptalks.css'
// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import LayerSwitcher from './LayerSwitcher'
import * as maptalks from 'maptalks';
class Main extends Component {
  // 初始化页面常量 绑定事件方法
  constructor (props, context) {
    super(props)
    this.initMap = this.initMap.bind(this);
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
      baseLayer: new maptalks.TileLayer('base', {
        'urlTemplate' : 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
        'subdomains'  : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      })
    })
  }

  // 组件已经加载到dom中
  componentDidMount () {
    this.initMap()
  }

  render () {
    return (
      <div id="map" className="map-content">
        <LayerSwitcher selectLayerName="Baidu"></LayerSwitcher>
      </div>
    );
  }
}

Main.defaultProps = {
};

export default Main;
