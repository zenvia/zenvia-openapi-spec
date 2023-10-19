import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const buttonItemBase: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title: 'Button type',
      enum: [
        'URL', 'PHONE_NUMBER', 'QUICK_REPLY', 'OPT_OUT', 'MPM',
      ],
      type: 'string',
    },
    text: {
      title: 'Button text',
      type: 'string',
    },
  },
  required: [
    'type',
    'text',
  ],
};

export const ref = createComponentRef(__filename);
export default buttonItemBase;
