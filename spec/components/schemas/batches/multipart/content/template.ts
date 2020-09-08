// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as template } from '../../../content/template';

const obj: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model.',
  type: 'object',
  allOf: [{
    $ref: template,
  }, {
    type: 'object',
    properties: {
      fields: {
        type: 'object',
        readOnly: true,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default obj;
