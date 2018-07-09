import * as React from 'react';
import * as PropTypes from 'prop-types';
import '../../dist/react-map.css';
import './index.scss';
import { Map } from '../..';

class Index extends React.Component {
  static propTypes = {
    location: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.object
  };

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  // 组件已经加载到dom中
  componentDidMount () {
    setTimeout(() => {
    });
  }

  render () {
    return (
      <Map
        className="map-content"
        center={[-0.113049, 51.498568]}
        zoom={14}
      />
    );
  }
}

export default Index;
