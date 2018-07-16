import collect from 'bisheng/collect';
import MainContent from './MainContent';

function isChangelog(pathname) {
  return pathname.indexOf('changelog') >= 0;
}

export default collect(async nextProps => {
  const { pathname } = nextProps.location;
  const pageDataPath = pathname.split('/');
  const pageData = isChangelog(pathname)
    ? nextProps.data.changelog.CHANGELOG
    : nextProps.utils.get(nextProps.data, pageDataPath);
  if (!pageData) {
    throw 404; // eslint-disable-line no-throw-literal
  }

  const pageDataPromise = typeof pageData === 'function'
    ? pageData()
    : (pageData && pageData.index)();
  const demosFetcher = nextProps.utils.get(nextProps.data, [
    ...pageDataPath,
    'demo'
  ]);
  if (demosFetcher) {
    const [localizedPageData, demos] = await Promise.all([
      pageDataPromise,
      demosFetcher()
    ]);
    return { localizedPageData, demos };
  }
  return { localizedPageData: await pageDataPromise };
})(MainContent);
