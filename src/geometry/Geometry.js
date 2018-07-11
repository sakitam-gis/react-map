import React from 'react';
import PropTypes from 'prop-types';
import * as maptalks from 'maptalks';

class Geometry extends React.Component {
  static propTypes = {
    id: PropTypes.arrayOf([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    visible: PropTypes.bool,
    editable: PropTypes.bool,
    cursor: PropTypes.string,
    defaultProjection: PropTypes.string, // BAIDU, IDENTITY
    draggable: PropTypes.bool,
    dragShadow: PropTypes.bool,
    dragOnAxis: PropTypes.bool,
    zIndex: PropTypes.bool,
    symbol: PropTypes.object,
    properties: PropTypes.any
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
      this.geometry = new maptalks.Geometry();
      layer.addGeometry(this.geometry);
    }
  }

  componentDidMount() {
    this.createGeometry(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createGeometry(nextProps);
    return null;
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

export default Geometry;
