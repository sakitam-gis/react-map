import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';
import OverlayLayer from './OverlayLayer';

class VectorLayer extends OverlayLayer {
  static defaultProps = {
    cursor: 'default',
    enableSimplify: true,
    geometryEvents: true,
    defaultIconSize: [20, 20],
    cacheVectorOnCanvas: true,
    cacheSvgOnCanvas: true,
    enableAltitude: false,
    altitudeProperty: 'altitude',
    drawAltitude: false
  };

  static propTypes = {
    cursor: PropTypes.string,
    enableSimplify: PropTypes.bool,
    geometryEvents: PropTypes.bool,
    defaultIconSize: PropTypes.arrayOf(PropTypes.number),
    cacheVectorOnCanvas: PropTypes.bool,
    cacheSvgOnCanvas: PropTypes.bool,
    enableAltitude: PropTypes.bool,
    altitudeProperty: PropTypes.string,
    drawAltitude: PropTypes.bool
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      layer: null
    };
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
      const { id, geometries } = nextProps;
      const layerInter = new maptalks.VectorLayer(id, geometries, nextProps);
      map.addLayer(layerInter);
      this.setState({
        layer: layerInter
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.createLayer(nextProps);
    return null;
  }

  /**
   * render
   * @returns {null}
   */
  render () {
    // const { children } = this.props;
    console.log(this);
    return null;
  }
}

export default VectorLayer;
