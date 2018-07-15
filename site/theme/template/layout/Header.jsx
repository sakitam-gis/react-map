import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import classNames from 'classnames';
import {
  Select,
  Menu,
  Row,
  Col,
  Icon,
  Popover,
  Input
} from 'antd';
import * as utils from '../helper/utils';

const { Option } = Select;

// let docsearch;
// if (typeof window !== 'undefined') {
//   docsearch = require('docsearch.js'); // eslint-disable-line
// }

function initDocSearch () {
  // if (!docsearch) {
  //   return;
  // }
  // const lang = locale === 'zh-CN' ? 'cn' : 'en';
  // docsearch({
  //   apiKey: '60ac2c1a7d26ab713757e4a081e133d0',
  //   indexName: 'ant_design',
  //   inputSelector: '#search-box input',
  //   algoliaOptions: { facetFilters: [`tags:${lang}`] },
  //   transformData(hits) {
  //     hits.forEach(hit => {
  //       hit.url = hit.url.replace('ant.design', location.host);
  //       hit.url = hit.url.replace('https:', location.protocol);
  //     });
  //     return hits;
  //   },
  //   debug: false // Set debug to true if you want to inspect the dropdown
  // });
}

export default class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired
  };

  state = {
    menuVisible: false
  };

  componentDidMount () {
    const { router } = this.context;
    router.listen(this.handleHideMenu);
    const { searchInput } = this;
    document.addEventListener('keyup', event => {
      if (event.keyCode === 83 && event.target === document.body) {
        searchInput.focus();
      }
    });
    initDocSearch();
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true
    });
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false
    });
  };

  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: visible
    });
  };

  handleVersionChange = url => {
    const currentUrl = window.location.href;
    const currentPathname = window.location.pathname;
    window.location.href = currentUrl
      .replace(window.location.origin, url)
      .replace(currentPathname, utils.getLocalizedPathname(currentPathname));
  };

  getMenus = () => {
    const { isMobile } = this.context;
    const menuMode = isMobile ? 'inline' : 'horizontal';
    const {
      location, themeConfig: {
        header: {
          docVersions,
          github,
          nav
        }
      }
    } = this.props;
    console.log(github);
    const docVersionList = {
      ...docVersions
    };
    const versionOptions = Object.keys(docVersionList).map(version => (
      <Option value={docVersionList[version]} key={version}>
        {version}
      </Option>
    ));
    const module = location.pathname
      .replace(/(^\/|\/$)/g, '')
      .split('/')
      .slice(0, -1)
      .join('/');
    const activeMenuItem = module || 'home';
    return [
      <Select
        key="version"
        className="version"
        size="small"
        dropdownMatchSelectWidth={false}
        defaultValue="1.0.0"
        onChange={this.handleVersionChange}
        getPopupContainer={trigger => trigger.parentNode}
      >
        {versionOptions}
      </Select>,
      <Menu
        className="menu-site"
        mode={menuMode}
        selectedKeys={[activeMenuItem]}
        id="nav"
        key="nav"
      >
        {
          nav && nav.length > 0 ? (
            nav.map(item => {
              return (
                <Menu.Item key={item.key}>
                  <Link to={utils.getLocalizedPathname(item.href, true)}>
                    {item.name}
                  </Link>
                </Menu.Item>
              );
            })
          ) : (
            <Menu.Item key="index">
              <Link to={utils.getLocalizedPathname('/', true)}>
                首页
              </Link>
            </Menu.Item>
          )
        }
      </Menu>
    ];
  };

  render () {
    const { menuVisible } = this.state;
    const { isMobile } = this.context;
    const headerClassName = classNames({ clearfix: true });
    const menu = this.getMenus();
    const searchPlaceholder = '在文档中搜索';
    return (
      <header id="header" className={headerClassName}>
        {isMobile && (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        )}
        <Row>
          <Col xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
            <Link to={utils.getLocalizedPathname('/', true)} id="logo">
              <h4 style={{ display: 'inline-block', fontSize: '18px' }}>React-Map</h4>
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={19} md={18} sm={0} xs={0}>
            <div id="search-box">
              <Icon type="search" />
              <Input
                ref={ref => (this.searchInput = ref)}
                placeholder={searchPlaceholder}
              />
            </div>
            {!isMobile && menu}
          </Col>
        </Row>
      </header>
    );
  }
}
