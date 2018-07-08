import * as React from 'react';
import * as PropTypes from 'prop-types';

class Index extends React.Component {
  // static mapStateToProps = function (state) {
  //   console.log(state, this);
  // };

  static propTypes = {
    location: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.object
  };

  constructor (props, context) {
    super(props, context);
    this.state = {
      collapsed: false
    };

    this.menus = [
      {
        name: '监控首页',
        key: 'dashboard',
        path: '/index/dashboard',
        icon: 'dashboard'
      },
      {
        name: '列表页面',
        key: 'table',
        icon: 'table',
        path: 'table',
        children: [
          {
            name: '简单表格',
            key: 'sample',
            icon: '',
            path: '/table/sample'
          },
          {
            name: '复杂表格',
            key: 'complex',
            icon: '',
            path: '/table/complex'
          }
        ]
      },
      {
        name: '错误页面',
        key: 'error',
        icon: 'warning',
        path: 'error',
        children: [
          {
            name: '404',
            key: '404',
            icon: '',
            path: '/error/404'
          },
          {
            name: '403',
            key: '403',
            icon: '',
            path: '/error/403'
          },
          {
            name: '500',
            key: '500',
            icon: '',
            path: '/error/500'
          }
        ]
      }
    ];
  }

  // 组件已经加载到dom中
  componentDidMount () {
    setTimeout(() => {
    });
  }

  render () {
    return (
      <div>11248</div>
    );
  }
}

export default Index;
