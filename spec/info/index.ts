import { readFileSync } from 'fs';
import { join } from 'path';
import { InfoObject } from 'openapi3-ts';

const description = readFileSync(join(__dirname, './description.md'), 'utf-8');

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
    url: 'https://hmagarotto.github.io/zenvia-api-docs/zenvia-logo-developers.png'
  }
};

export default info;
