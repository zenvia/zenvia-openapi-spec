import { InfoObject } from 'openapi3-ts';
import { rawLoad } from '../../utils/raw-load';

const description = rawLoad(__dirname, './description.md');

const info: InfoObject = {
  version: '1.0.0',
  title: 'Zenvia APIs',
  description,
  termsOfService: 'https://zenvia.com/',
  contact: {
    name: 'API Support',
    email: 'atendimento@zenvia.com',
    url: 'https://devs.zenvia.com/',
  },
  license: {
    name: 'MIT',
    url:  'https://raw.githubusercontent.com/zenvia/zenvia-openapi-spec/master/LICENSE.md',
  },
  'x-logo': {
    url: 'https://zenvia-static.s3.amazonaws.com/brand/zenvia-brand-mark-regular.svg',
  },
};

export default info;
