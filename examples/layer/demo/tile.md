---
order: 0
title: TileLayer
---

## summary

TileLayer。

````jsx
import { Checkbox, Row, Col } from 'antd';
import { Map, TileLayer } from '@sakitam-gis/react-map';
import './index.less';

class Index extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      zoom: 9,
      fov: 0,
      pitch: 0,
      bearing: 0,
      layers: []
    };

    this.map = null;
    this.layers = [
      {
        id: 'lite',
        key: 'lite',
        renderer: 'gl',
        urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd']
      },
      {
        id: 'dark',
        key: 'dark',
        renderer: 'gl',
        urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd']
      },
      {
        id: 'google',
        key: 'google',
        renderer: 'gl',
        urlTemplate: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
        subdomains: null
      },
      {
        id: 'image',
        key: 'image',
        renderer: 'gl',
        urlTemplate: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
        subdomains: null
      },
      {
        id: 'amap',
        key: 'amap',
        renderer: 'gl',
        urlTemplate: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=8&x={x}&y={y}&z={z}',
        subdomains: ['1', '2', '3', '4']
      }
    ];
  }

  componentDidMount () {
  }

  handleMapLoad = (map) => {
    this.map = map;
  };

  onChange = (value) => {
    this.setState({
      layers: this.layers.filter(item => value.indexOf(item.id) > -1)
    });
  };

  render () {
    const { zoom, fov, pitch, bearing, layers } = this.state;
    return (
      <div className="example-content">
        <Map
          className="map-content"
          center={[-0.113049, 51.498568]}
          zoom={zoom}
          pitch={pitch}
          bearing={bearing}
          fov={fov}
          events={{
            onload: this.handleMapLoad
          }}
        >
          {
            layers.map(layer => {
              return (
                <TileLayer {...layer} />
              );
            })
          }
        </Map>
        <div className="example-top">
          <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>
            <Row>
              {
                this.layers.map(layer => {
                  return (
                    <Col key={layer.key} span={8}><Checkbox value={layer.key}>{layer.key}</Checkbox></Col>
                  );
                })
              }
            </Row>
          </Checkbox.Group>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />
, mountNode);
````
