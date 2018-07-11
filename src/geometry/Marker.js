import isequal from 'lodash/isEqual';
import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';
import Geometry from './Geometry';

class Marker extends Geometry {
  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number),
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
      const { id, coordinates, options } = nextProps;
      this.geometry = new maptalks.Marker(coordinates, options);
      this.geometry.setId(id);
      this.geometry.setProperties(options);
      layer.addGeometry(this.geometry);
    }
  }

  componentDidMount() {
    this.createGeometry(this.props);
  }

  componentWillReceiveProps (nextProps) {
    const { id, coordinates, options } = this.props;
    if (!this.geometry) {
      return null;
    }
    if (!isequal(nextProps.id, id)) {
      this.geometry.setId(nextProps.id);
    }
    if (!isequal(nextProps.coordinates, coordinates)) {
      this.geometry.setCoordinates(nextProps.coordinates);
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

export default Marker;
