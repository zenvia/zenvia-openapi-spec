// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const locale: SchemaObject = {
  title: 'Locale',
  description: 'Template language and locale',
  type: 'string',
  enum: [
    'af',
    'sq',
    'ar',
    'az',
    'bn',
    'bg',
    'ca',
    'zh_CN',
    'zh_HK',
    'zh_TW',
    'hr',
    'cs',
    'da',
    'nl',
    'en',
    'en_GB',
    'en_US',
    'et',
    'fil',
    'fi',
    'fr',
    'de',
    'el',
    'gu',
    'ha',
    'he',
    'hi',
    'hu',
    'id',
    'ga',
    'it',
    'ja',
    'kn',
    'kk',
    'ko',
    'lo',
    'lv',
    'lt',
    'mk',
    'ms',
    'ml',
    'mr',
    'nb',
    'fa',
    'pl',
    'pt_BR',
    'pt_PT',
    'pa',
    'ro',
    'ru',
    'sr',
    'sk',
    'sl',
    'es',
    'es_AR',
    'es_ES',
    'es_MX',
    'sw',
    'sv',
    'ta',
    'te',
    'th',
    'tr',
    'uk',
    'ur',
    'uz',
    'vi',
    'zu',
  ],
};

export const ref = createComponentRef(__filename);
export default locale;