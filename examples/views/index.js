import * as React from 'react';
import * as PropTypes from 'prop-types';
import '../../dist/react-map.css';
import './index.scss';
import { Map, VectorLayer, Circle } from '../..';

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
    // const timer = setInterval(() => {
    //   const { zoom } = this.state;
    //   if (zoom <= 0) {
    //     window.clearInterval(timer);
    //   }
    //   this.setState({
    //     zoom: zoom - 1
    //   });
    // }, 1000);
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
        <VectorLayer
          id="vector"
        >
          <Circle
            center={[-0.113049, 51.498568]}
            radius={500}
            options={{
              symbol: {
                lineColor: '#34495e',
                lineWidth: 2,
                polygonFill: '#1bbc9b',
                polygonOpacity: 0.4
              }
            }}
          />
        </VectorLayer>
      </Map>
    );
  }
}

export default Index;
