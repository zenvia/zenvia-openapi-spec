import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

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
    isMTLS: {
      title: 'Mutual Transport Layer Security Protocol',
      description: 'Indicates whether or not this webhook should use MTLS communication.',
      type: 'boolean',
      default: false,
    },
  },
};

export const ref = createComponentRef(__filename);
export default subscription;
