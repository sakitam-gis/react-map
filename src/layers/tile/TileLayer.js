import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';
import Layer from '../Layer';

class TileLayer extends Layer {
  static defaultProps = {
    subdomains: null,
    repeatWorld: true,
    background: true,
    backgroundZoomDiff: 6,
    loadingLimitOnInteracting: 3,
    placeholder: false,
    crossOrigin: null,
    tileSize: [256, 256],
    offset: [0, 0],
    tileSystem: null,
    fadeAnimation: true,
    debug: false,
    spatialReference: null,
    maxCacheSize: 256,
    clipByPitch: true,
    maxAvailableZoom: null,
    cascadeTiles: true,
    minPitchToCascade: 35
  };

  static propTypes = {
    urlTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
      .isRequired,
    subdomains: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.number)
    ]),
    repeatWorld: PropTypes.bool,
    background: PropTypes.bool,
    backgroundZoomDiff: PropTypes.number,
    loadingLimitOnInteracting: PropTypes.number,
    placeholder: PropTypes.bool,
    crossOrigin: PropTypes.string,
    tileSize: PropTypes.arrayOf(PropTypes.number),
    offset: PropTypes.arrayOf(PropTypes.number),
    tileSystem: PropTypes.arrayOf(PropTypes.number),
    fadeAnimation: PropTypes.bool,
    debug: PropTypes.bool,
    spatialReference: PropTypes.object,
    maxCacheSize: PropTypes.number,
    clipByPitch: PropTypes.bool,
    maxAvailableZoom: PropTypes.number,
    cascadeTiles: PropTypes.bool,
    minPitchToCascade: PropTypes.number
  };

  constructor(props, context) {
    super(props, context);

    /**
     * layer state
     * @type {{isAdd: boolean}}
     */
    this.state = {
      isAdd: false
    };

    this.layer = null;
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
      const { id } = nextProps;
      this.layer = new maptalks.TileLayer(id, nextProps);
      this.layer.on('add', () => {
        this.setState({
          isAdd: true
        });
      });
      map.addLayer(this.layer);
    }
  }
}

export default TileLayer;
