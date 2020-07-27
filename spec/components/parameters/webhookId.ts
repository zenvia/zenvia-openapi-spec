import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const subscriptionId: ParameterObject = {
  name: 'webhookId',
  in: 'path',
  required: true,
  description: 'the webhook identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default subscriptionId;
