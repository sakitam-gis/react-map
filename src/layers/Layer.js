import React from 'react';
import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';

class TileLayer extends React.Component {
  static defaultProps = {
    attribution: null,
    minZoom: null,
    maxZoom: null,
    visible: true,
    opacity: 1,
    globalCompositeOperation: null,
    renderer: 'canvas',
    debugOutline: '#0f0',
    cssFilter: null,
    forceRenderOnMoving: false,
    forceRenderOnZooming: false,
    forceRenderOnRotating: false
  };

  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    attribution: PropTypes.string,
    minZoom: PropTypes.number,
    maxZoom: PropTypes.number,
    zIndex: PropTypes.number,
    visible: PropTypes.bool,
    opacity: PropTypes.number,
    globalCompositeOperation: PropTypes.string,
    renderer: PropTypes.oneOf(['gl', 'canvas']),
    debugOutline: PropTypes.string,
    cssFilter: PropTypes.string,
    forceRenderOnMoving: PropTypes.bool,
    forceRenderOnZooming: PropTypes.bool,
    forceRenderOnRotating: PropTypes.bool
  };

  static contextTypes = {
    map: PropTypes.instanceOf(maptalks.Map)
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      layer: null
    };
  }

  render() {
    return null;
  }

  /**
   * create layer
   * @param nextProps
   */
  createLayer (nextProps) {
    if (nextProps) {
      const { map } = this.context;
      const { layer } = this.state;
      if (!map) return;
      if (layer) {
        map.removeLayer(layer);
      }
      const { id } = nextProps;
      const layerInter = new maptalks.Layer(id, nextProps);
      map.addLayer(layerInter);
      this.setState({
        layer: layerInter
      });
    }
  }

  componentDidMount() {
    this.createLayer(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createLayer(nextProps);
  }

  componentWillUnmount() {
    const { map } = this.context;
    const { layer } = this.state;
    if (!map || !layer) return;
    map.removeLayer(layer);
  }
}

export default TileLayer;
