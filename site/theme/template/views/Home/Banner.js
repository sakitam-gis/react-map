import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Link } from 'bisheng/router';
import GitHubButton from 'react-github-button';
import { Map, TileLayer } from '@sakitam-gis/react-map';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'banner',
  };

  render() {
    const { className, isMobile, themeConfig } = this.props;
    const {
      header: {
        github
      },
      index: {
        banner
      }
    } = themeConfig;
    return (
      <div className="home-page-wrapper banner-wrapper" id="banner">
        <div className="banner-bg-wrapper">
          <Map
            className="map-content"
            center={[-0.113049, 51.498568]}
            zoom={8}
          >
            <TileLayer
              id="layer"
              renderer="gl"
              urlTemplate="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
              subdomains={['a', 'b', 'c', 'd']}
            />
          </Map>
          <ScrollParallax location="banner" className="banner-bg" animation={{ playScale: [1, 1.5], rotate: 0 }} />
        </div>
        <QueueAnim
          className={`${className} page`}
          style={{
            padding: isMobile ? '0 0' : '0 24px'
          }}
          type="alpha"
          delay={150}
        >
          {isMobile && (
            <div className="img-wrapper" key="image">
              <Map
                className="map-content"
                center={[-0.113049, 51.498568]}
                zoom={8}
              >
                <TileLayer
                  id="layer"
                  renderer="gl"
                  urlTemplate="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                  subdomains={['a', 'b', 'c', 'd']}
                />
              </Map>
            </div>)
          }
          <QueueAnim
            className="text-wrapper"
            key="text"
            type="bottom"
          >
            <h1 key="h1">
              {banner.title}
            </h1>
            <p key="p">
              {banner.introduce}
            </p>
            <div className="banner-btns" key="buttons">
              <Link className="banner-btn components" to={banner.more.link}>
                {banner.more.label}
              </Link>
              <Link className="banner-btn language" to={banner.quickStart.link}>
                {banner.quickStart.label}
              </Link>
              {!isMobile && (
                <GitHubButton
                  key="github-button"
                  size={github.size || 'large'}
                  type={github.type || 'stargazers'}
                  namespace={github.user}
                  repo={github.repo}
                />
              )}
            </div>
          </QueueAnim>
          {!isMobile && (
            <div className="img-wrapper" key="image">
              <ScrollParallax location="banner" animation={{ playScale: [1, 1.5], y: 80 }} />
            </div>
          )}
        </QueueAnim>
      </div>
    );
  }
}

export default Banner;
