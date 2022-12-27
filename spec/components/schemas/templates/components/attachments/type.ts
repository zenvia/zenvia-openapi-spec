import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as attachmentDynamicRef } from './attachment-dynamic';
import { ref as attachmentFixedRef } from './attachment-fixed';

const type: SchemaObject = {
  title: 'Type',
  description: 'Type of attachment',
  oneOf: [{
    $ref: attachmentFixedRef,
  }, {
    $ref: attachmentDynamicRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      FIXED: attachmentFixedRef,
      DYNAMIC: attachmentDynamicRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default type;
