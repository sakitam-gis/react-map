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
  root: '/',
  port: 7007,
  source: {
    docs: './docs',
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
        user: 'sakitam-fdd',
        repo: 'bisheng-motion-theme',
        type: 'star',
        count: true
      },
      nav: [
        { name: '示例', href: '/examples/', key: 'examples' },
        { name: '起步', href: '/docs/guide/index', key: 'docs/guide' },
        { name: 'API', href: '/docs/api/index', key: 'docs/api' }
      ],
      docVersions: {
        '0.0.1': '/'
      }
    },
    categoryOrder: {
      'react map': 0,
      反馈: 1,
      Other: 6,
      Components: 100
    },
    typeOrder: {
      Other: 7
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
      site: path.join(process.cwd(), 'src'),
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
