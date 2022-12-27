import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as inlineRef } from './inline';
import { ref as attachmentRef } from './attachment';

const base: SchemaObject = {
  title: 'base',
  description: 'Disposition of attachment',
  oneOf: [{
    $ref: inlineRef,
  }, {
    $ref: attachmentRef,
  }],
  discriminator: {
    propertyName: 'disposition',
    mapping: {
      INLINE: inlineRef,
      ATTACHMENT: attachmentRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
