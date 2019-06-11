import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const webhook: SchemaObject = {
  type: 'object',
  properties: {
    url: {
      title: 'Webhook URL',
      description: 'URL to post events',
      type: 'string',
    },
    headers: {
      title: 'Request headers',
      type: 'object',
    },
  },
  required: [
    'url',
  ],
};

export const ref = createComponentRef(__filename);
export default webhook;
