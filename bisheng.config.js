const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

function alertBabelConfig (rules) {
  rules.forEach((rule) => {
    if (rule.loader && rule.loader === 'babel-loader') {
      rule.options.plugins = rule.options.plugins.filter(plugin => !plugin.indexOf
        || plugin.indexOf('babel-plugin-add-module-exports') === -1);
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

module.exports = {
  root: '/',
  source: './docs',
  output: './_site',
  theme: 'bisheng-motion-theme',
  devServerConfig: {},
  port: 4000,
  themeConfig: {
    home: '/',
    source: 'docs',
    title: 'react map',
    repository: 'https://github.com/sakitam-gis/react-map/edit/master/',
    index: {
      banner: {
        title: 'React Map',
        introduce: '一个基于maptalks的React组件',
        content: 'react-map 是一个基于 maptalks 封装的地图组件；'
          + '帮助你轻松的接入地图到 React 项目中。',
        more: {
          label: '了解更多',
          link: 'http://maptalks.org'
        },
        quickStart: {
          label: '快速开始',
          link: '/guide/index'
        }
      },
      introduce: {
        title: '组件使用',
        introduce: '一个简单的在 React 项目中使用 React-Map 的实例',
        content: '',
        more: {
          label: '了解更多',
          link: '/guide/index'
        }
      },
      exhibition: {
        title: '示例展示',
        introduce: '',
        content: '包含了常用组件的使用示例和调用方式，基本能满足基础业务需求，如有更好的想法欢迎 PR。',
        more: {
          label: '更多示例',
          link: '/examples/'
        }
      }
    },
    header: {
      github: {
        user: 'sakitam-gis',
        repo: 'react-map',
        type: 'star',
        count: true
      },
      nav: [
        { name: '示例', href: '/examples/', key: 'examples' },
        { name: '起步', href: '/guide/index', key: 'guide' },
        { name: 'API', href: '/api/index', key: 'api' }
      ]
    },
    footer: {
      copyright: 'sakitam-gis'
    }
  },
  webpackConfig (config) {
    alertBabelConfig(config.module.rules);
    config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));
    config.resolve.alias = {
      'react-router': 'react-router/umd/ReactRouter'
    };
    return config;
  }
};
