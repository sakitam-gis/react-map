import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';
import Geometry from './Geometry';

class Circle extends Geometry {
  static propTypes = {
    center: PropTypes.arrayOf(PropTypes.number),
    radius: PropTypes.number,
    options: PropTypes.any
  };

  /**
   * super class
   * @param props
   * @param context
   */
  constructor (props, context) {
    super(props, context);

    /**
     * geometry
     * @type {null}
     */
    this.geometry = null;
  }

  /**
   * create geometry
   * @param nextProps
   */
  createGeometry (nextProps) {
    if (nextProps) {
      const { layer } = this.context;
      if (!layer) return;
      const { center, radius, options } = nextProps;
      this.geometry = new maptalks.Circle(center, radius, options);
      this.geometry.setProperties(options);
      layer.addGeometry(this.geometry);
    }
  }

  /**
   * render
   * @returns {null}
   */
  render () {
    return null;
  }
}

export default Circle;
