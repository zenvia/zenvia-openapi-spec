import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as inlineRef } from './inline';
import { ref as attachmentRef } from './attachment';


export const attachments: SchemaObject = {
  title: 'template attachments',
  oneOf: [{
    $ref: inlineRef,
  }, {
    $ref: attachmentRef,
  }],
  discriminator: {
    propertyName: 'disposition',
    mapping: {
      inline: inlineRef,
      attachment: attachmentRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default attachments;