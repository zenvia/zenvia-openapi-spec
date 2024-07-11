// tslint:disable:import-name
import { OpenAPIObject } from 'openapi3-ts';
import info from './info';
import components from './components';
import paths from './paths';
import tags from './tags';
import tagGroups from './tags/groups';

const api: OpenAPIObject = {
  openapi: '3.1.2',
  info,
  servers: [{
    url: 'https://api.zenvia.com/v2',
  }],
  paths,
  components,
  security: [{
    JWT: [],
  }, {
    TOKEN: [],
  }],
  tags,
  'x-tagGroups': tagGroups,
};

export default api;
