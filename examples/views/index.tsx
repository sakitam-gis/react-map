import * as React from 'react';
import * as PropTypes from 'prop-types';
import '../../dist/react-map.css';
import './index.scss';
import { Map } from '../../'

class Index extends React.Component {
  public static propTypes = {
    location: PropTypes.object
  };

  public static contextTypes = {
    store: PropTypes.object
  };

  constructor (props: any, context: any) {
    super(props, context);
    this.state = {
      collapsed: false
    };
  }

  // 组件已经加载到dom中
  public componentDidMount () {
    setTimeout(() => {
    });
  }

  public render () {
    return (
      <Map className="map-content" center={[-0.113049,51.498568]} zoom={14}></Map>
    );
  }
}

export default Index;
