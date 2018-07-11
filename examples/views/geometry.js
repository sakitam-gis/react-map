import * as React from 'react';
import * as PropTypes from 'prop-types';
import '../../dist/react-map.css';
import './index.scss';
import {
  Map, TileLayer, VectorLayer,
  MultiPoint, MultiLineString,
  MultiPolygon
} from '../..';

class Geometry extends React.Component {
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
    // const timer = setInterval(() => {
    //   const { radius } = this.state;
    //   if (radius >= 1000) {
    //     window.clearInterval(timer);
    //   }
    //   this.setState({
    //     radius: radius + 100
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
        <TileLayer
          id="layer"
          renderer="gl"
          urlTemplate="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          subdomains={['a', 'b', 'c', 'd']}
        />
        <VectorLayer
          id="vector"
        >
          <MultiPoint
            id="marker"
            coordinates={[
              [-0.131049, 51.498568],
              [-0.107049, 51.498568],
              [-0.107049, 51.493568],
              [-0.131049, 51.493568],
              [-0.131049, 51.498568]
            ]}
            options={{
              symbol: {
                'markerFile': 'http://maptalks.org/examples/en/style/image-marker/raw/5.png',
                'markerWidth': 28,
                'markerHeight': 40,
                'markerDx': 0,
                'markerDy': 0,
                'markerOpacity': 1
              }
            }}
          />
          <MultiLineString
            id="linestring"
            coordinates={[
              [[-0.131049, 51.504568], [-0.107049, 51.504568]],
              [[-0.131049, 51.499568], [-0.107049, 51.499568]],
              [[-0.131049, 51.494568], [-0.107049, 51.494568]]
            ]}
            options={{
              arrowStyle: null, // arrow-style : now we only have classic
              arrowPlacement: 'vertex-last', // arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
              visible: true,
              editable: true,
              cursor: null,
              shadowBlur: 0,
              shadowColor: 'black',
              draggable: false,
              dragShadow: false, // display a shadow during dragging
              drawOnAxis: null, // force dragging stick on a axis, can be: x, y
              symbol: {
                'lineColor': '#1bbc9b',
                'lineWidth': 3
              }
            }}
          />
          <MultiPolygon
            id="polygon"
            coordinates={[
              [[[-0.131049, 51.503568], [-0.107049, 51.503568], [-0.107049, 51.501568], [-0.131049, 51.501568]]],
              [[[-0.131049, 51.498568], [-0.107049, 51.498568], [-0.107049, 51.496568], [-0.131049, 51.496568]]],
              [[[-0.131049, 51.493568], [-0.107049, 51.493568], [-0.107049, 51.491568], [-0.131049, 51.491568]]]
            ]}
            options={{
              visible: true,
              editable: true,
              cursor: 'pointer',
              shadowBlur: 0,
              shadowColor: 'black',
              draggable: false,
              dragShadow: false, // display a shadow during dragging
              drawOnAxis: null, // force dragging stick on a axis, can be: x, y
              symbol: {
                'lineColor': '#34495e',
                'lineWidth': 2,
                'polygonFill': 'rgb(135,196,240)',
                'polygonOpacity': 0.6
              }
            }}
          />
        </VectorLayer>
      </Map>
    );
  }
}

export default Geometry;
