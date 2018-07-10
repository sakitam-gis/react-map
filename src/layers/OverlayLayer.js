import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';
import Layer from './Layer';

class OverlayLayer extends Layer {
  static defaultProps = {
    drawImmediate: false
  };

  static propTypes = {
    drawImmediate: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);

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
      const { id, geometries } = nextProps;
      this.layer = new maptalks.OverlayLayer(id, geometries, nextProps);
      map.addLayer(this.layer);
    }
  }
}

export default OverlayLayer;
