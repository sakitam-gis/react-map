import * as React from 'react';

function getOptions(props: any): any {
  let options: any = {};
  for(let key in props) {
    if (
      key !== 'children'
      && typeof props[key] !== 'undefined' //exclude undefined ones
      && !key.match(/^on[A-Z]/)     //exclude events
    ) {
      options[key] = props[key];
    }
  }
  return options;
}

function getPropsKey(eventName: any) {
  return 'on' + eventName
  // eslint-disable-next-line
    .replace(/(\:[a-z])/g, $1 => $1.toUpperCase())
    .replace(/^[a-z]/, $1 => $1.toUpperCase())
    .replace(':','')
}

function getEvents(events: any={}, props: any={}): any {
  let prop2EventMap: any = {};
  for(let key in events) {
    prop2EventMap[getPropsKey(key)] = key;
  }

  let ret = {};
  for(let propName in props) {
    let eventName = prop2EventMap[propName];
    let prop = props[propName];
    if (typeof prop !== 'undefined' && propName.match(/^on[A-Z]/) && eventName) {
      ret[eventName] = prop;
    }
  }

  return ret;
}

let typeOf = function(value: object){
  return ({}).toString.call(value)
    .match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

function cloneObject(value: {
  clone: Function
}){
  const type = typeOf(value);
  if (type == 'object' || type == 'array') {
    if (value['clone']) {
      return value.clone();
    }
    const clone = type == 'array' ? [] : {};
    for (let key in value) {
      clone[key] = cloneObject(value[key]);
    }
    return clone;
  }
  return value;
}

function findChild(children: any, childType: string) {
  let found;
  let childrenArr = React.Children.toArray(children);
  for (let i = 0; i < childrenArr.length; i++) {
    let child: any = childrenArr[i];
    if (child.type.name === childType){
      found = child;
      break;
    }
  }
  return found;
}

function getRelation (str1: string, str2: string) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  } else if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

function getRenderArr (routes: Array<string>) {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
function getRoutes (path: string, routerData: object) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
  return renderRoutes;
}

export {
  getOptions,
  getEvents,
  cloneObject,
  findChild,
  getRoutes
}
