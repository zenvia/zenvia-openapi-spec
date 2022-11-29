import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as localeRef } from './locale';

const content: SchemaObject = {
  title: 'SMS and E-mail Content',
  type: 'object',
  description: 'Content with SMS and e-mail information and default locale, it\'s necessary to create configuration to at least one locale',
  properties: {
    default: {
      title: 'Locale',
      type: 'string',
      example: 'pt_br',
      description: 'The default locale of the configuration',
      enum: ['be', 'be_by', 'bn', 'bg', 'bg_bg', 'ca', 'ca_es', 'cs', 'cs_cz',
        'da', 'da_dk', 'de', 'de_ch', 'de_de', 'el', 'el_gr', 'en', 'en_au', 'en_be',
        'en_gb', 'en_jp', 'en_us', 'en_za', 'es', 'es_ar', 'es_es', 'es_mx', 'fr',
        'fr_ca', 'fr_fr', 'hi', 'it', 'it_it', 'nl', 'nl_be', 'nl_nl', 'pl', 'pl_pl',
        'pt', 'pt_br', 'pt_pt', 'sh', 'sh_sp', 'sk', 'sk_sk', 'sv', 'sv_se'],
    },
    pt_br: {
      title: 'SMS and E-mail configuration',
      type: 'object',
      $ref: localeRef,
    },
  },
  required: ['default'],
};

export const ref = createComponentRef(__filename);
export default content;
