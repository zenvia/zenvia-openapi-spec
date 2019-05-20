import { OpenAPIObject } from 'openapi3-ts';
import info from './info';
import { components } from './components';
import paths from './paths';
import tags from './tags';
import tagGroups from './tags/groups';

const api: OpenAPIObject = {
  openapi: '3',
  info,
  servers: [{
    url: 'http://api.zenvia.com/api/v1',
  }],
  paths,
  components,
  security: [{
    JWT: [],
  }],
  tags,
  'x-tagGroups': tagGroups,
};

export default api;
