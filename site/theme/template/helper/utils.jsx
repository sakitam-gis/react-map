export function getMenuItems(moduleData, categoryOrder, typeOrder) {
  const menuMeta = moduleData.map(item => item.meta);
  const menuItems = [];
  const sortFn = (a, b) => (a.order || 0) - (b.order || 0);
  menuMeta.sort(sortFn).forEach(meta => {
    if (!meta.category) {
      menuItems.push(meta);
    } else {
      const category = meta.category;
      let group = menuItems.filter(i => i.title === category)[0];
      if (!group) {
        group = {
          type: 'category',
          title: category,
          children: [],
          order: categoryOrder[category]
        };
        menuItems.push(group);
      }
      if (meta.type) {
        let type = group.children.filter(i => i.title === meta.type)[0];
        if (!type) {
          type = {
            type: 'type',
            title: meta.type,
            children: [],
            order: typeOrder[meta.type]
          };
          group.children.push(type);
        }
        type.children.push(meta);
      } else {
        group.children.push(meta);
      }
    }
  });
  return menuItems
    .map(i => {
      if (i.children) {
        i.children = i.children.sort(sortFn);
      }
      return i;
    })
    .sort(sortFn);
}

export function getLocalizedPathname(path) {
  const pathname = path.startsWith('/') ? path : `/${path}`;
  if (pathname === '/') {
    return '/index';
  }
  return `${pathname}`;
}
