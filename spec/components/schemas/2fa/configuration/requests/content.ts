import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as localeRef } from './locale';

const content: SchemaObject = {
  title: 'SMS and E-mail Content',
  type: 'object',
  description: 'Content with SMS and e-mail information',
  properties: {
    pt_br: {
      title: 'SMS and E-mail configuration',
      type: 'object',
      $ref: localeRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default content;
