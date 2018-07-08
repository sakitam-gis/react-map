import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as maptalks from 'maptalks';

export interface State {
  map?: maptalks.Map;
  ready: boolean;
}

// React Props updated between re-render
export interface Props {
  center?: number[];
  zoom?: number;
  maxZoom?: number;
  minZoom?: number;
  maxExtent?: Array<number>;
  zoomable?: boolean;
  className?: string;
  checkSize?: boolean;
  renderer?: string;
  maxVisualPitch?: number;
  maxPitch?: number;
  centerCross?: boolean;
  zoomInCenter?: boolean;
  fpsOnInteracting?: number;
  enableInfoWindow?: boolean;
  zoomAnimationDuration?: number;
  panAnimationDuration?: number;
  layerCanvasLimitOnInteracting?: number;
  baseLayer?: maptalks.TileLayer
}

class Map extends React.Component<Props, State> {
  public static defaultProps = {
    center: [0, 0],
    zoom: 0,
    baseLayer: new maptalks.TileLayer('base', {
      urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      subdomains: ['a','b','c','d'],
      attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    })
  };

  public static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number
  };

  public static childContextTypes = {
    map: PropTypes.object
  };

  public state = {
    map: undefined,
    ready: false
  };

  public getChildContext = () => ({
    map: this.state.map
  });

  public container: HTMLElement;

  public componentWillReceiveProps(nextProps: Props) {
    const { map } = this.state as State;
    if (!map) {
      return null;
    }

    if (nextProps.center) {
      map.setCenter(nextProps.center);
    }

    return null;
  }

  public setRef = (x: HTMLElement | null) => {
    this.container = x!;
  };

  public componentDidMount() {
    const {
      center,
      zoom
    } = this.props;
    const options = {
      zoom: zoom,
      center: center
    };
    const map = new maptalks.Map(this.container, options);
    this.setState({ map });
  }

  public render() {
    const { className } = this.props;

    return (
      <div
        ref={this.setRef}
        className={className}
      >
      </div>
    );
  }
}

export default Map;
