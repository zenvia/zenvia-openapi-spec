import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';

const requestContactInfoButton: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }],
};

export const ref = createComponentRef(__filename);
export default requestContactInfoButton;
