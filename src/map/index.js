import React from 'react';
import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';

class Map extends React.Component {
  static defaultProps = {
    center: [0, 0],
    zoom: 0,
  };

  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    maxZoom: PropTypes.number,
    minZoom: PropTypes.number,
    maxExtent: PropTypes.array,
    zoomable: PropTypes.bool,
    className: PropTypes.string,
    checkSize: PropTypes.bool,
    renderer: PropTypes.string,
    maxVisualPitch: PropTypes.number,
    maxPitch: PropTypes.number,
    centerCross: PropTypes.bool,
    zoomInCenter: PropTypes.bool,
    fpsOnInteracting: PropTypes.number,
    enableInfoWindow: PropTypes.bool,
    zoomAnimationDuration: PropTypes.number,
    panAnimationDuration: PropTypes.number,
    layerCanvasLimitOnInteracting: PropTypes.number,
    baseLayer: maptalks.TileLayer
  };

  static childContextTypes = {
    map: PropTypes.instanceOf(maptalks.Map),
    options: PropTypes.object
  };

  constructor (props) {
    super(props);

    this.state = {
      map: undefined
    };

    this.container = null;
  }

  getChildContext = () => {
    const { map } = this.state;
    return {
      map
    };
  };

  componentWillReceiveProps (nextProps) {
    const { map } = this.state;
    if (!map) {
      return null;
    }

    if (nextProps.center) {
      map.setCenter(nextProps.center);
    }

    return null;
  }

  setRef = (x = null) => {
    this.container = x;
  };

  componentDidMount () {
    const { center, zoom } = this.props;
    const options = {
      zoom,
      center
    };
    const map = new maptalks.Map(this.container, options);
    const layer = new maptalks.TileLayer('base', {
      urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      subdomains: ['a', 'b', 'c', 'd'],
      attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    });
    map.addLayer(layer);
    this.setState({
      map
    });
  }

  render () {
    const { className } = this.props;
    return (
      <div ref={this.setRef}
        className={className}
      />
    );
  }
}

export default Map;
