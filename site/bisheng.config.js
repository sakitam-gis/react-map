const path = require('path');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

const isDev = process.env.NODE_ENV === 'development';
const usePreact = process.env.REACT_ENV === 'preact';

function alertBabelConfig(rules) {
  rules.forEach((rule) => {
    if (rule.loader && rule.loader === 'babel-loader') {
      rule.options.plugins = rule.options.plugins.filter(plugin => (
        !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1
      ));
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

module.exports = {
  root: '/react-map/',
  port: 7007,
  source: {
    docs: './docs',
    examples: './examples',
    changelog: [
      'CHANGELOG.md'
    ]
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/index.html',
  themeConfig: {
    home: '/',
    header: {
      github: {
        user: 'sakitam-gis',
        repo: 'react-map',
        type: 'stargazers',
        size: 'large'
      },
      nav: [
        { name: '示例', href: '/examples/index/', key: 'examples' },
        { name: '起步', href: '/docs/guide/install', key: 'docs/guide' },
        { name: 'API', href: '/docs/api/map', key: 'docs/api' }
      ],
      docVersions: {
        '0.0.1': '/'
      }
    },
    index: {
      banner: {
        title: 'React-Map',
        introduce: 'react-map 是一个基于 maptalks 封装的地图组件；帮助你轻松的接入地图到 React 项目中。',
        more: {
          label: '了解更多',
          link: '/examples/index/'
        },
        quickStart: {
          label: '快速开始',
          link: '/docs/guide/install'
        }
      },
      introduce: {
        title: '相关资源'
      }
    },
    categoryOrder: {
      'react map': 0,
      反馈: 1,
      Other: 2,
      Examples: 100
    },
    typeOrder: {
      Examples: 0,
      Other: 7
    },
    codepenPrefillConfig: {
      js: {
        regex: '@sakitam-gis/react-map',
        tmpl: 'const { $1 } = ReactMap;'
      },
      title: 'ReactMap',
      editors: '001',
      css_external: '',
      js_external: [
        'react@16.x/dist/react.js',
        'react-dom@16.x/dist/react-dom.js'
      ],
      js_pre_processor: 'typescript'
    },
    riddlePrefillConfig: {
      title: 'ReactMap'
    },
    codesanboxPrefillConfig: {
      title: 'ReactMap'
    },
    footer: {
      copyright: 'sakitam-gis'
    }
  },
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
  webpackConfig(config) {
    config.resolve.alias = {
      '@sakitam-gis/react-map': path.join(process.cwd(), 'src'),
      site: path.join(process.cwd(), 'site'),
      'react-router': 'react-router/umd/ReactRouter',
    };

    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
    };
    if (usePreact) {
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        react: 'preact-compat',
        'react-dom': 'preact-compat',
        'create-react-class': 'preact-compat/lib/create-react-class',
        'react-router': 'react-router',
      });
    }
    if (isDev) {
      config.devtool = 'source-map';
    }
    alertBabelConfig(config.module.rules);
    config.plugins.push(
      new CSSSplitWebpackPlugin({ size: 4000 })
    );
    return config;
  },

  htmlTemplateExtraData: {
    isDev,
    usePreact
  },
};
