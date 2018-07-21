---
order: 0
title: 基础使用
---

## summary

地图基本展示。

````jsx
import { Button, Slider, InputNumber, Row, Col } from 'antd';
import { Map, TileLayer } from '@sakitam-gis/react-map';
import './basic.less';
class Index extends React.Component {
  constructor (props, context) {
      super(props, context);
      this.state = {
        zoom: 14,
        fov: 0,
        pitch: 0,
        bearing: 0
      };
  
      this.map = null;
    }
  
    componentDidMount () {
    }
  
    handleMapLoad = (map) => {
      this.map = map;
    };
  
    handleClick = (event, type) => {
      const { zoom } = this.state;
      if (type === 'plus') {
        this.setState({
          zoom: zoom + 1
        });
      } else {
        this.setState({
          zoom: zoom - 1
        });
      }
    };
  
    onChange = (value, type) => {
      this.setState({
        [type]: value,
      });
    };
  
    render () {
      const { zoom, fov, pitch, bearing } = this.state;
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
            <TileLayer
              id="layer"
              renderer="gl"
              urlTemplate="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
              subdomains={['a', 'b', 'c', 'd']}
            />
          </Map>
          <div className="example-top">
            <Row>
              <Col span={4}>
                <span className="tool-label">pitch：</span>
              </Col>
              <Col span={8}>
                <Slider min={0} max={60} onChange={(event) => this.onChange(event, 'pitch')} value={pitch} />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0}
                  max={60}
                  style={{ marginLeft: 16 }}
                  value={pitch}
                  onChange={(event) => this.onChange(event, 'pitch')}
                />
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <span className="tool-label">bearing：</span>
              </Col>
              <Col span={8}>
                <Slider min={0} max={360} onChange={(event) => this.onChange(event, 'bearing')} value={bearing} />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0}
                  max={360}
                  style={{ marginLeft: 16 }}
                  value={bearing}
                  onChange={(event) => this.onChange(event, 'bearing')}
                />
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <span className="tool-label">fov：</span>
              </Col>
              <Col span={8}>
                <Slider min={0} max={55} onChange={(event) => this.onChange(event, 'fov')} value={fov} />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0}
                  max={55}
                  style={{ marginLeft: 16 }}
                  value={fov}
                  onChange={(event) => this.onChange(event, 'fov')}
                />
              </Col>
            </Row>
          </div>
          <div className="example-tool">
            <Button type="primary" shape="circle" icon="plus" onClick={(event) => this.handleClick(event, 'plus')} />
            <Button type="primary" shape="circle" icon="minus" onClick={(event) => this.handleClick(event, 'minus')} />
          </div>
        </div>
      );
    }
}

ReactDOM.render(
  <Index />
, mountNode);
````
