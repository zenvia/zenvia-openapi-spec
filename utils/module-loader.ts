import { sync as fileSearch } from 'glob';
import { relative, parse, basename } from 'path';
import { PathsObject, ComponentsObject } from 'openapi3-ts';

export function loadPathsObject(pathBase: string): PathsObject {
  const paths: PathsObject = {};
  fileSearch(`${pathBase}/*/**/*.ts`, {nosort: true})
  .forEach(file => {
    const path = basename(file, '.ts').replace(/\@/g,'/');
    const pathModule = require(file).default;
    paths[`/${path}`] = pathModule;
  });
  return paths;
}

function loadComponentTypeObject(pathBase: string, type: string): any {
  const items = {};
  fileSearch(`${pathBase}/${type}/**/*.ts`, {nosort: true})
  .forEach(file => {
    const relativeToBase = relative(`${pathBase}/${type}`, file);
    const parsedPath = parse(relativeToBase);
    let name = parsedPath.dir.replace('/','.');
    if (name.length) name += '.';
    name += parsedPath.name;
    const pathModule = require(file).default;
    items[name] = pathModule;
  });
  return items;
}

export function loadComponentsObject(pathBase: string): ComponentsObject {
  const types = [
    'schemas',
    'responses',
    'parameters',
    'examples',
    'requestBodies',
    'headers',
    'securitySchemes',
    'links',
    'callbacks',
  ];
  const components: ComponentsObject = {};
  types.forEach(type => components[type] = loadComponentTypeObject(pathBase, type));
  return components;
}
