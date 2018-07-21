import React from 'react';
import isequal from 'lodash/isEqual';
import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';

class Map extends React.Component {
  static defaultProps = {};

  static propTypes = {
    center: PropTypes.array.isRequired,
    zoom: PropTypes.number.isRequired,
    maxZoom: PropTypes.number,
    minZoom: PropTypes.number,
    maxExtent: PropTypes.array,
    zoomable: PropTypes.bool,
    className: PropTypes.string,
    checkSize: PropTypes.bool,
    renderer: PropTypes.string,
    maxVisualPitch: PropTypes.number,
    maxPitch: PropTypes.number,
    fov: PropTypes.number,
    pitch: PropTypes.number,
    bearing: PropTypes.number,
    centerCross: PropTypes.bool,
    zoomInCenter: PropTypes.bool,
    fpsOnInteracting: PropTypes.number,
    enableInfoWindow: PropTypes.bool,
    zoomAnimationDuration: PropTypes.number,
    panAnimationDuration: PropTypes.number,
    layerCanvasLimitOnInteracting: PropTypes.number,
    layer: PropTypes.arrayOf(PropTypes.object),
    baseLayer: PropTypes.arrayOf(PropTypes.object),
    spatialReference: PropTypes.object,
    events: PropTypes.objectOf(PropTypes.func)
  };

  static childContextTypes = {
    map: PropTypes.instanceOf(maptalks.Map)
  };

  constructor (props) {
    super(props);

    this.state = {
      isLoad: false,
      isMounted: false
    };

    /**
     * map
     * @type {null}
     */
    this.map = null;

    this.container = null;

    this.events = {};
  }

  getChildContext () {
    return {
      map: this.map
    };
  }

  shouldComponentUpdate () {
    const { isMounted } = this.state;
    return !isMounted;
  }

  // componentWillUpdate(nextProps, nextState)
  // componentDidUpdate(prevProps, prevState)

  componentWillReceiveProps (nextProps) {
    const {
      center, zoom, spatialReference, cursor,
      maxExtent, maxZoom, minZoom,
      pitch, bearing, fov
    } = this.props;
    if (!this.map) {
      return null;
    }

    if (!isequal(nextProps.center, center) || !isequal(nextProps.zoom, zoom)) {
      if (!isequal(nextProps.center, center) && isequal(nextProps.zoom, zoom)) {
        this.map.setCenter(nextProps.center);
      }
      if (isequal(nextProps.center, center) && !isequal(nextProps.zoom, zoom)) {
        this.map.setZoom(nextProps.zoom);
      }
      if (!isequal(nextProps.center, center) && !isequal(nextProps.zoom, zoom)) {
        this.map.setCenterAndZoom(nextProps.center, nextProps.zoom);
      }
    }

    if (!isequal(nextProps.spatialReference, spatialReference)) {
      this.map.setSpatialReference(nextProps.zoom);
    }
    if (!isequal(nextProps.cursor, cursor)) {
      this.map.setCursor(nextProps.cursor);
    }
    if (!isequal(nextProps.maxExtent, maxExtent)) {
      this.map.setMaxExtent(nextProps.maxExtent);
    }
    if (!isequal(nextProps.maxZoom, maxZoom)) {
      this.map.setMaxZoom(nextProps.maxZoom);
    }
    if (!isequal(nextProps.minZoom, minZoom)) {
      this.map.setMinZoom(nextProps.minZoom);
    }
    if (!isequal(nextProps.fov, fov)) {
      this.map.setFov(nextProps.fov);
    }
    if (!isequal(nextProps.bearing, bearing)) {
      this.map.setBearing(nextProps.bearing);
    }
    if (!isequal(nextProps.pitch, pitch)) {
      this.map.setPitch(nextProps.pitch);
    }
    return null;
  }

  /**
   * set base layers
   * @param layers
   * @returns {null}
   */
  setBaseLayer (layers) {
    if (!this.map) {
      return null;
    }
    if (layers && layers.length > 0) {
      this.map.setBaseLayer();
    }
  }

  /**
   * set layers
   * @param layers
   * @returns {null}
   */
  setLayers (layers) {
    if (!this.map) {
      return null;
    }
    if (layers && layers.length > 0) {
      // map.addLayer();
    }
  }

  setRef = (x = null) => {
    this.container = x;
  };

  componentDidMount () {
    const { center, zoom, events, fov, bearing, pitch } = this.props;
    const options = {
      zoom,
      center,
      fov: Math.max(0.01, Math.min(59, fov)),
      bearing,
      pitch
    };
    this.map = new maptalks.Map(this.container, options);
    if (this.map.isLoaded()) {
      this.setState({
        isLoad: true
      });
      for (const key in events) {
        if (key === 'onload') {
          events[key](this.map, this);
        } else {
          this.map.on(key, events[key], this);
        }
      }
    }
    this.setState({
      isMounted: true
    });
  }

  componentWillUnmount () {
    if (this.map) {
      this.map = null;
      this.setState({
        isMounted: false
      });
    }
  }

  render () {
    const { isLoad } = this.state;
    const { className, children } = this.props;
    return (
      <div ref={this.setRef} className={className}>
        {isLoad ? children : null}
      </div>
    );
  }
}

export default Map;
