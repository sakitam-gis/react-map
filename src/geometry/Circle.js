import isequal from 'lodash/isEqual';
import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';
import Geometry from './Geometry';

class Circle extends Geometry {
  static propTypes = {
    center: PropTypes.arrayOf(PropTypes.number),
    radius: PropTypes.number,
    options: PropTypes.any
  };

  static contextTypes = {
    layer: PropTypes.instanceOf(maptalks.Layer)
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

  componentDidMount() {
    this.createGeometry(this.props);
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    const { id, center, radius, options } = this.props;
    if (!this.geometry) {
      return null;
    }
    if (!isequal(nextProps.id, id)) {
      this.geometry.setId(nextProps.id);
    }
    if (!isequal(nextProps.center, center)) {
      this.geometry.setCoordinates(nextProps.center);
    }
    if (!isequal(nextProps.radius, radius)) {
      this.geometry.setRadius(nextProps.radius);
    }
    if (!isequal(nextProps.options, options)) {
      this.geometry.setProperties(nextProps.options);
    }
  }

  componentWillUnmount() {
    const { layer } = this.context;
    if (!layer) return;
    layer.removeGeometry(this.geometry);
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
