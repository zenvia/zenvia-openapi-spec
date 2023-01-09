// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const footer: SchemaObject = {
  title: 'Footer',
  description: `Template footer.
                <br>*Only applicable to [WhatsApp](#tag/WhatsApp) and [RCS](#tag/RCS) channels.*`,
  type: 'object',
  required: ['type', 'text'],
  properties: {
    type: {
      title: 'Footer type',
      description: 'The footer can only be a fixed text',
      type: 'string',
      enum: ['TEXT_FIXED'],
    },
    text: {
      title: 'Footer text',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default footer;
