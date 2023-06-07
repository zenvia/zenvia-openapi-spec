import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as attachmentDynamicRef } from './attachment-dynamic';
import { ref as attachmentFixedRef } from './attachment-fixed';

export const attachments: SchemaObject = {
  title: 'Attachments',
  description: `List of files to be sent along with the content.
                <br>*Only applicable to [E-Mail](#tag/E-Mail) channel.*`,
  type: 'array',
  items: {
    type: 'object',
    oneOf: [{
      $ref: attachmentFixedRef,
    }, {
      $ref: attachmentDynamicRef,
    }],
    discriminator: {
      propertyName: 'type',
      mapping: {
        ATTACHMENT_FIXED: attachmentFixedRef,
        ATTACHMENT_DYNAMIC: attachmentDynamicRef,
      },
    },
    required: [
      'type',
    ],
  },
};

export const ref = createComponentRef(__filename);
export default attachments;
