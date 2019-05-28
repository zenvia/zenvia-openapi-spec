import { InfoObject } from 'openapi3-ts';
import { rawLoad } from '../../utils/raw-load';

const description = rawLoad(__dirname, './description.md');

const info: InfoObject = {
  version: '1.0.0',
  title: 'Zenvia API',
  description,
  termsOfService: 'https://zenvia.com/',
  contact: {
    name: 'API Support',
    email: 'apisupport@zenvia.com',
    url: 'https://developer.zenvia.com',
  },
  license: {
    name: 'MIT License',
    url:  'https://api.github.com/licenses/mit',
  },
  'x-logo': {
    url: 'https://hmagarotto.github.io/zenvia-api-docs/zenvia-logo-developers.png',
  },
};

export default info;
