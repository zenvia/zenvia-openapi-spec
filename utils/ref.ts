import { basename } from 'path';

export function createComponentRef(path: string) {
  const componentPath = path.split(/\/spec\/components\//)[1];
  const parts = componentPath.split(/\//);
  const type = parts.splice(0, 1)[0];
  const fileName = basename(parts.pop(), '.ts');
  let name = parts.join('.');
  if (name.length) name += '.';
  name += fileName;
  return `#/components/${type}/${name}`;
}
