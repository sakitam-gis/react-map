import * as React from 'react';
import * as PropTypes from 'prop-types';
import '../../dist/react-map.css';
import './index.scss';
import { Map, TileLayer, VectorLayer } from '../..';

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
    const timer = setInterval(() => {
      const { zoom } = this.state;
      if (zoom <= 0) {
        window.clearInterval(timer);
      }
      this.setState({
        zoom: zoom - 1
      });
    }, 1000);
  }

  handleMapLoad = (map, event) => {
    console.log(map, event);
  };

  render () {
    const { zoom } = this.state;
    console.log(zoom);
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
        <VectorLayer
          id="vector"
        />
      </Map>
    );
  }
}

export default Index;
