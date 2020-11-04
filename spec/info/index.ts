import { InfoObject } from 'openapi3-ts';
import { rawLoad } from '../../utils/raw-load';

const description = rawLoad(__dirname, './description.md');

const info: InfoObject = {
  version: '2.0.0',
  title: 'ZenAPI',
  description,
  termsOfService: 'https://zenvia.com/',
  contact: {
    name: 'API Support',
    email: 'atendimento@zenvia.com',
    url: 'https://zenapi.zenvia.com/',
  },
  license: {
    name: 'MIT',
    url:  'https://raw.githubusercontent.com/zenvia/zenvia-openapi-spec/master/LICENSE.md',
  },
  'x-logo': {
    url: 'https://zenvia.github.io/zenvia-openapi-spec/assets/zenapi.png',
  },
};

export default info;
