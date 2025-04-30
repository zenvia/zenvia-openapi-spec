import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as authRef } from '../webhook-auth/webhook-auth';

const subscription: SchemaObject = {
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
    auth: {
      allOf: [{
        $ref: authRef,
      }, {
        type: 'object',
        required: ['type', 'url', 'oauth'],
      }],
    },
  },
};

export const ref = createComponentRef(__filename);
export default subscription;
