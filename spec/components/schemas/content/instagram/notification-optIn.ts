import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const notificationOptIn: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'notification_optIn',
      },
      notificationRecipient: {
        type: 'string',
        description: 'A token that you will be using to send recurring messages for a specific topic that user has opted-in. You will receive a unique token for each topic user opts-in.',
      },
      tokenExpiry: {
        type: 'string',
        description: 'A Timestamp with the expiry time of the token.',
      },
      payload: {
        type: 'string',
        description: 'The payload you sent on optin_request.',
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default notificationOptIn;