import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const buttonItemBase: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title: 'Button type',
      enum: [
        'URL', 'PHONE_NUMBER', 'QUICK_REPLY', 'OPT_OUT', 'MPM', 'COPY_CODE', 'VIEW_LOCATION', 'SEARCH_LOCATION', 'SHARE_LOCATION', 'CALENDAR_EVENT',
      ],
      type: 'string',
    },
  },
  required: [
    'type',
  ],
};

export const ref = createComponentRef(__filename);
export default buttonItemBase;
