import { sync as fileSearch } from 'glob';
import { join, relative, parse, basename, dirname } from 'path';
import { PathsObject, ComponentsObject, PathItemObject } from 'openapi3-ts';
import { ICodeSamplesByPath, ICodeSamples } from './code-samples';
import { rawLoad } from './raw-load';

const operations = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch'];

function loadCodeSamples(pathBase: string): ICodeSamplesByPath {
  const samples: ICodeSamplesByPath = {};
  fileSearch(`${pathBase}/*/**/index.ts`, { nosort: true })
  .forEach((file) => {
    const pathSample = require(file).default as ICodeSamples;
    operations.forEach((operation) => {
      if (pathSample.operations[operation]) {
        const langSamples = pathSample.operations[operation];
        langSamples.forEach((langSample) => {
          langSample.source = rawLoad(join(dirname(file), langSample.source));
        });
      }
    });
    samples[pathSample.path] = pathSample;
  });
  return samples;
}

function injectSamples(path: PathItemObject, samples: ICodeSamples) {
  if (samples) {
    operations.forEach((operation) => {
      if (path[operation] && samples.operations[operation]) {
        path[operation]['x-code-samples'] = samples.operations[operation];
      }
    });
  }
}

export function loadPathsObject(pathBase: string): PathsObject {
  const samplesByPath = loadCodeSamples(join(pathBase, '..', 'code_samples'));

  const paths: PathsObject = {};
  fileSearch(`${pathBase}/*/**/*.ts`, { nosort: true })
  .forEach((file) => {
    const path = basename(file, '.ts').replace(/\@/g, '/');
    const pathModule = require(file).default;
    const endpoint = `/${path}`;
    injectSamples(pathModule, samplesByPath[endpoint]);
    paths[endpoint] = pathModule;
  });
  return paths;
}

function removeUnpublishedSchemas(items: any) {
  if (Array.isArray(items)) {
    items.forEach(item => removeUnpublishedSchemas(item));
  } else if (typeof(items) === 'object') {
    for (const propertyName of Object.keys(items)) {
      if (items[propertyName]['x-unpublished']) {
        delete items[propertyName];
      } else {
        removeUnpublishedSchemas(items[propertyName]);
      }
    }
  }

  return items;
}

function removeUnpublished(type: string, items: any) {
  if (type === 'schemas' && process.env.PUBLIC) {
    return removeUnpublishedSchemas(items);
  }
  return items;
}

function loadComponentTypeObject(pathBase: string, type: string): any {
  const items = {};
  fileSearch(`${pathBase}/${type}/**/*.ts`, { nosort: true })
  .forEach((file) => {
    const relativeToBase = relative(`${pathBase}/${type}`, file);
    const parsedPath = parse(relativeToBase);
    let name = parsedPath.dir.replace(/\//g, '.');
    if (name.length) name += '.';
    name += parsedPath.name;
    const pathModule = require(file).default;
    items[name] = removeUnpublished(type, pathModule);
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
