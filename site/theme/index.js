require('core-js/es6/string');
const path = require('path');

const homeTmpl = '/views/Home/index';
const contentTmpl = '/components/Content/index';

function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module}`);
  return markdownData => {
    const { filename } = markdownData.meta;
    if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta
      };
    }
  };
}

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    components(markdownData) {
      const { filename } = markdownData.meta;
      if (
        !/^components/.test(filename) || /[/\\]demo$/.test(path.dirname(filename))
      ) {
        return;
      }
      return {
        meta: markdownData.meta
      };
    },
    changelog(markdownData) {
      if (/CHANGELOG/.test(markdownData.meta.filename)) {
        return {
          meta: markdownData.meta
        };
      }
    },
    'guide': pickerGenerator('guide'),
    'api': pickerGenerator('api'),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    'bisheng-plugin-antd',
    'bisheng-plugin-react?lang=__react'
  ],
  routes: {
    path: '/',
    component: '/layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [
      {
        path: 'index',
        component: homeTmpl
      },
      {
        path: 'changelog',
        component: contentTmpl
      },
      {
        path: 'guide/:contentName',
        component: contentTmpl
      },
      {
        path: 'api/:contentName',
        component: contentTmpl
      },
      {
        path: 'components/:children/',
        component: contentTmpl
      }
    ]
  }
};
