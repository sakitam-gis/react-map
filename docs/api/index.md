---
order: 0
index: true
chinese: 地图
english: map
---

构造自 `maptalks.Map`, 是 react-map的核心组件，其他所有组件必须依赖此组件。

## 怎么使用

### 导入

```bash
$ import { Map } from '@sakitam-gis/react-map';
```

### 使用

```jsx harmony
import * as PropTypes from 'prop-types';
import '../../dist/react-map.css';
import './map.less';
import { Map, TileLayer } from '../../'
class Index extends React.Component {
  static propTypes = {
    location: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.object
  };

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
```

## API

### props 

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| className  | String   |  ''      | 容器类名 |
| center  | Array   |  null      | 地图中心点 |
| zoom  | Number   |  null      | 地图层级 |

> [查看详细使用](http://maptalks.org/maptalks.js/api/0.x/Map.html)