// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';
import { ref as btnTextRef } from './button-item-text';

const optOutButton: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  },
  { $ref: btnTextRef },
  {
    type: 'object',
    required: [
      'type',
      'text',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default optOutButton;
