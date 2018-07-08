const ReactMap = require('./src');

const req = require.context('./src', true, /^\.\/locale-provider\/.+_.+\.tsx$/);

ReactMap.locales = {};

req.keys().forEach((mod) => {
  const match = mod.match(/\/([^/]+).tsx$/);
  ReactMap.locales[match[1]] = req(mod).default;
});

module.exports = ReactMap;
