import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

export const header: SchemaObject = {
  title: 'Header',
  description: 'Template header',
  type: 'object',
  required: ['type'],
  properties: {
    type: {
      title: 'Header type',
      description: 'The header can have an image, document or text.',
      type: 'string',
      enum: ['MEDIA_DOCUMENT', 'MEDIA_IMAGE', 'MEDIA_VIDEO', 'TEXT_FIXED', 'TEXT_TEMPLATE'],
    },
    text: {
      title: 'Header text',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default header;
