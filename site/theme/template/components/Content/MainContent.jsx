import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import { Row, Col, Menu, Icon, Affix } from 'antd';
import classNames from 'classnames';
import MobileMenu from 'rc-drawer-menu';
import Article from './Article';
import ComponentDoc from './ComponentDoc';
import * as utils from '../../helper/utils';
import { getChildren } from 'jsonml.js/lib/utils';

const { SubMenu } = Menu;

function getActiveMenuItem (props) {
  const { children } = props.params;
  return (
    (children && children.replace('-cn', ''))
    || props.location.pathname.replace(/(^\/|-cn$)/g, '')
  );
}

function getModuleData (props) {
  const { pathname } = props.location;
  const moduleName = /^\/?components/.test(pathname)
    ? 'components'
    : pathname
      .split('/')
      .filter(item => item)
      .slice(0, 2)
      .join('/');
  const moduleData = moduleName === 'components' || moduleName === 'changelog'
    ? [
      ...props.picked.components,
      ...props.picked.changelog
    ] : props.picked[moduleName];
  return moduleData.filter(
    ({ meta }) => meta.filename.endsWith('.md')
  );
}

function fileNameToPath (filename) {
  const snippets = filename
    .replace(/\.md$/i, '')
    .split('/');
  return snippets[snippets.length - 1];
}

class MainContent extends React.Component {
  static contextTypes = {
    isMobile: PropTypes.bool.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      openKeys: this.getSideBarOpenKeys(props) || []
    };
  }

  componentDidMount () {
    this.componentDidUpdate();
  }

  componentWillReceiveProps (nextProps) {
    const openKeys = this.getSideBarOpenKeys(nextProps);
    if (openKeys) {
      this.setState({ openKeys });
    }
  }

  componentDidUpdate (prevProps) {
    const { location } = this.props;
    if (!prevProps || prevProps.location.pathname !== location.pathname) {
      this.bindScroller();
    }
    if (
      !prevProps || (!window.location.hash
      && prevProps && prevProps.location.pathname !== location.pathname)
    ) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      return;
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      if (window.location.hash) {
        document.querySelector(window.location.hash).scrollIntoView();
      }
    }, 10);
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
    this.scroller.disable();
  }

  bindScroller () {
    if (this.scroller) {
      this.scroller.disable();
    }
    require('intersection-observer'); // eslint-disable-line
    const scrollama = require('scrollama'); // eslint-disable-line
    this.scroller = scrollama();
    this.scroller
      .setup({
        step: '.markdown > h2, .code-box', // required
        offset: 0
      })
      .onStepEnter(({ element }) => {
        [].forEach.call(document.querySelectorAll('.toc-affix li a'), node => {
          node.className = '';
        });
        const currentNode = document.querySelectorAll(
          `.toc-affix li a[href="#${element.id}"]`
        )[0];
        if (currentNode) {
          currentNode.className = 'current';
        }
      });
  }

  handleMenuOpenChange = openKeys => {
    this.setState({ openKeys });
  };

  getSideBarOpenKeys (nextProps) {
    const { themeConfig } = nextProps;
    const { pathname } = nextProps.location;
    const prevModule = this.currentModule;
    this.currentModule = pathname.replace(/^\//).split('/')[1] || 'components';
    if (this.currentModule === 'react') {
      this.currentModule = 'components';
    }
    if (prevModule !== this.currentModule) {
      const moduleData = getModuleData(nextProps);
      return utils.getMenuItems(
        moduleData,
        themeConfig.categoryOrder,
        themeConfig.typeOrder
      ).map(m => m.title || m.title);
    }
  }

  generateMenuItem = (isTop, item) => {
    const key = fileNameToPath(item.filename);
    const title = item.title;
    const text = isTop
      ? title
      : [
        <span key="english">{title}</span>,
        <span className="chinese" key="chinese">
          {item.subtitle}
        </span>
      ];
    const { disabled } = item;
    const url = item.filename
      .replace(/\.md$/i, '')
      .toLowerCase();
    const child = !item.link ? (
      <Link
        to={utils.getLocalizedPathname(
          /^components/.test(url) ? `${url}/` : url,
          true
        )}
        disabled={disabled}
      >
        {text}
      </Link>
    ) : (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        disabled={disabled}
        className="menu-item-link-outside"
      >
        {text} <Icon type="export"/>
      </a>
    );

    return (
      <Menu.Item key={key.toLowerCase()} disabled={disabled}>
        {child}
      </Menu.Item>
    );
  };

  getMenuItems () {
    const { themeConfig } = this.props;
    const moduleData = getModuleData(this.props);
    const menuItems = utils.getMenuItems(
      moduleData,
      themeConfig.categoryOrder,
      themeConfig.typeOrder
    );
    return menuItems.map(menuItem => {
      if (menuItem.children) {
        return (
          <SubMenu title={<h4>{menuItem.title}</h4>} key={menuItem.title}>
            {menuItem.children.map(child => {
              if (child.type === 'type') {
                return (
                  <Menu.ItemGroup title={child.title} key={child.title}>
                    {child.children
                      .sort((a, b) => {
                        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
                      })
                      .map(leaf => this.generateMenuItem(false, leaf))}
                  </Menu.ItemGroup>
                );
              }
              return this.generateMenuItem(false, child);
            })}
          </SubMenu>
        );
      }
      return this.generateMenuItem(true, menuItem);
    });
  }

  flattenMenu (menu) {
    if (menu && menu.type && menu.type.isMenuItem) {
      return menu;
    }
    if (Array.isArray(menu)) {
      return menu.reduce((acc, item) => acc.concat(this.flattenMenu(item)), []);
    }
    return this.flattenMenu(
      (menu.props && menu.props.children) || menu.children
    );
  }

  getFooterNav (menuItems, activeMenuItem) {
    const menuItemsList = this.flattenMenu(menuItems);
    let activeMenuItemIndex = -1;
    menuItemsList.forEach((menuItem, i) => {
      if (menuItem && menuItem.key === activeMenuItem) {
        activeMenuItemIndex = i;
      }
    });
    const prev = menuItemsList[activeMenuItemIndex - 1];
    const next = menuItemsList[activeMenuItemIndex + 1];
    return { prev, next };
  }

  render () {
    const { props } = this;
    const { isMobile } = this.context;
    const { openKeys } = this.state;
    const activeMenuItem = getActiveMenuItem(props);
    const menuItems = this.getMenuItems();
    const { prev, next } = this.getFooterNav(menuItems, activeMenuItem);
    const { localizedPageData } = props;
    const mainContainerClass = classNames('main-container', {
      'main-container-component': !!props.demos
    });
    const menuChild = (
      <Menu
        inlineIndent="40"
        className="aside-container menu-site"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={[activeMenuItem]}
        onOpenChange={this.handleMenuOpenChange}
      >
        {menuItems}
      </Menu>
    );
    return (
      <div className="main-wrapper">
        <Row>
          {isMobile ? (
            <MobileMenu
              iconChild={[
                <Icon type="menu-unfold" />,
                <Icon type="menu-fold" />
              ]}
              key="Mobile-menu"
              wrapperClassName="drawer-wrapper"
            >
              {menuChild}
            </MobileMenu>
          ) : (
            <Col
              xxl={4}
              xl={5}
              lg={6}
              md={24}
              sm={24}
              xs={24}
              className="main-menu"
            >
              <Affix className="menu-affix" offsetTop={16}>
                {menuChild}
              </Affix>
            </Col>
          )}
          <Col
            xxl={20}
            xl={19}
            lg={18}
            md={24}
            sm={24}
            xs={24}
            className={mainContainerClass}
          >
            {props.demos ? (
              <ComponentDoc
                {...props}
                doc={localizedPageData}
                demos={props.demos}
              />
            ) : (
              <Article {...props} content={localizedPageData}/>
            )}
          </Col>
        </Row>

        <Row>
          <Col
            xxl={{ span: 20, offset: 4 }}
            xl={{ span: 19, offset: 5 }}
            lg={{ span: 18, offset: 6 }}
            md={24}
            sm={24}
            xs={24}
          >
            <section className="prev-next-nav">
              {prev
                ? React.cloneElement(prev.props.children || prev.children[0], {
                  className: 'prev-page'
                })
                : null}
              {next
                ? React.cloneElement(next.props.children || next.children[0], {
                  className: 'next-page'
                })
                : null}
            </section>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainContent;
