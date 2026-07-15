import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';

const requestContactInfoButton: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }],
  properties: {
    type: {
      type: 'string',
      enum: ['REQUEST_CONTACT_INFO'],
    },
  },
};

export const ref = createComponentRef(__filename);
export default requestContactInfoButton;
