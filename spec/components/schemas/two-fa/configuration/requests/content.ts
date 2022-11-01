import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as languageref } from './language';

const content: SchemaObject = {
  title: 'SMS and E-mail Content',
  type: 'object',
  description: 'Content with SMS and e-mail information',
  properties: {
    pt_br: {
      type: 'object',
      title: 'SMS and E-mail configuration',
      $ref: languageref,
    },
    en_us: {
      type: 'object',
    },
  },
};

export const ref = createComponentRef(__filename);
export default content;
