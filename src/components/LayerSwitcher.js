import '../style/layer-switcher.scss'
// eslint-disable-next-line
import React, { Component } from 'react';

const fixStyle = (item, index) => {
  return {
    background: 'url(' + item['icon'] + ') 0px 0px no-repeat',
    zIndex: index + 1
  }
};

const getClassName = (flag) => {
  return flag ? 'selected-item layer-switcher-li' : 'layer-switcher-li'
}

class LayerSwitcher extends Component {
  // 初始化页面常量 绑定事件方法
  constructor (props, context) {
    super(props)
  }
  // 组件已经加载到dom中
  componentDidMount () {
  }

  switchLayer () {
    console.log(event)
  }

  getList () {
    return this.props.layers.map((item, index) => {
      return (
        <li key={index}
            className={getClassName((item.layerName === this.selectLayerName), index)}
            style={fixStyle(item, index)} onClick={() => this.switchLayer()}>
          <span className="layer-name">{item.layerName}</span>
        </li>
      )
    });
  }

  render () {
    const listItems = this.getList()
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
