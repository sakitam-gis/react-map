import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { enquireScreen } from 'enquire-js';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Header from './Header';
import Footer from './Footer';

if (typeof window !== 'undefined') {
  require('../../assets/style');
  window.react = React;
  window['react-dom'] = ReactDOM;
  window.antd = require('antd');
}

let isMobile = false;
enquireScreen(b => {
  isMobile = b;
});

class Layout extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  static childContextTypes = {
    isMobile: PropTypes.bool
  };

  getChildContext() {
    const { isMobile: mobile } = this.state;
    return { isMobile: mobile };
  }

  constructor(props) {
    super(props);
    // const { pathname } = props.location;
    this.state = {
      isMobile
    };
  }

  componentDidMount() {
    const { router } = this.context;
    router.listen(loc => {
      console.log(loc);
    });

    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    if (nprogressHiddenStyle) {
      this.timer = setTimeout(() => {
        nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
      }, 0);
    }

    enquireScreen(b => {
      this.setState({
        isMobile: !!b
      });
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { children, ...restProps } = this.props;

    return (
      <LocaleProvider locale={zhCN}>
        <div className="page-wrapper">
          <Header {...restProps} />
          {children}
          <Footer {...restProps} />
        </div>
      </LocaleProvider>
    );
  }
}

export default Layout;
