import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

export const header: SchemaObject = {
  title: 'Header',
  description: `Template header. This will be used as subject in the [E-Mail](#tag/E-Mail) channel.
                <br>*Only applicable to [WhatsApp](#tag/WhatsApp), [RCS](#tag/RCS) and [E-Mail](#tag/E-Mail) channels.*`,
  type: 'object',
  required: ['type'],
  properties: {
    type: {
      type: 'string',
      title: 'Header type',
      description: `The header can have an image, document or text.
                    <br>*Only applicable to [WhatsApp](#tag/WhatsApp) and [RCS](#tag/RCS) and [E-Mail](#tag/E-Mail) channels.*`,
      enum: ['MEDIA_DOCUMENT', 'MEDIA_IMAGE', 'MEDIA_VIDEO', 'TEXT_FIXED', 'TEXT_TEMPLATE'],
    },
    text: {
      type: 'string',
      title: 'Header text',
      description: 'Content header. This will be used as subject in the [E-Mail](#tag/E-Mail) channel.<br>In other channels it will be a bold text above the body.',
    },
  },
};

export const ref = createComponentRef(__filename);
export default header;
