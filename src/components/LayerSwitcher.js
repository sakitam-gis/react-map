import '../style/layer-switcher.scss'
// eslint-disable-next-line
import React, { Component } from 'react';

class LayerSwitcher extends Component {
  // 初始化页面常量 绑定事件方法
  constructor (props, context) {
    super(props)
  }
  // 组件已经加载到dom中
  componentDidMount () {
  }

  switchLayer (item) {
    const _layers = this.props.map.getLayer('BaseLayer').getLayers();
    _layers.forEach(layer => {
      if (layer.getId() === item.layerName) {
        layer.show();
      } else {
        layer.hide();
      }
    })
  }

  getList () {
    return this.props.layers.map((item, index) => {
      return (
        <li key={index}
            className={this.getClassName((item.layerName === this.selectLayerName), index)}
            style={this.fixStyle(item, index)} onClick={() => this.switchLayer(item)}>
          <span className="layer-name">{item.layerName}</span>
        </li>
      )
    });
  }

  fixStyle (item, index) {
    return {
      background: 'url(' + item['icon'] + ') 0px 0px no-repeat',
      zIndex: index + 1
    }
  }

  getClassName (flag) {
    return flag ? 'selected-item layer-switcher-li' : 'layer-switcher-li'
  };

  render () {
    const listItems = this.getList();
    return (
      <div className="layer-switcher">
        <ul className="layer-switcher-ul">
          {listItems}
        </ul>
      </div>
    );
  }
}

LayerSwitcher.defaultProps = {
  selectLayerName: '',
  layers: [
    {
      layerName: 'OSM',
      name: 'OSM',
      icon: require('../assets/images/maptype_pano.png')
    },
    {
      layerName: 'Google',
      name: '谷歌',
      icon: require('../assets/images/maptype_yunran.png')
    },
    {
      layerName: 'Baidu',
      name: '百度',
      icon: require('../assets/images/maptype_vector.png')
    }
  ]
};

export default LayerSwitcher;
