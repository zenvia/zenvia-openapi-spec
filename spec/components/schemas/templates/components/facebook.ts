// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as bodyRef } from './body';

const facebookComponents: SchemaObject = {
  title: 'Components',
  description: 'Message content of this template',
  type: 'object',
  required: ['body'],
  properties: {
    body: {
      $ref: bodyRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default facebookComponents;
