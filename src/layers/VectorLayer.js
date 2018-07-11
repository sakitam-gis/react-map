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

  static childContextTypes = {
    layer: PropTypes.instanceOf(maptalks.Layer)
  };

  constructor (props, context) {
    super(props, context);
    this.layer = null;

    /**
     * layer state
     * @type {{isAdd: boolean}}
     */
    this.state = {
      isAdd: false
    };
  }

  /**
   * create layer
   * @param nextProps
   */
  createLayer (nextProps) {
    if (nextProps) {
      const { map } = this.context;
      if (!map) return;
      if (this.layer) {
        map.removeLayer(this.layer);
      }
      const { id, geometries } = nextProps;
      this.layer = new maptalks.VectorLayer(id, geometries, nextProps);
      this.layer.on('add', () => {
        this.setState({
          isAdd: true
        });
      });
      map.addLayer(this.layer);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.createLayer(nextProps);
  }

  getChildContext() {
    return {
      layer: this.layer
    };
  }

  /**
   * render
   * @returns {*}
   */
  render () {
    const { isAdd } = this.state;
    console.log(isAdd);
    const { children } = this.props;
    return (isAdd ? children : null);
  }
}

export default VectorLayer;
