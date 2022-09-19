import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const optInResponse: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'optin_response',
      },
      notificationRecipient: {
        type: 'string',
        description: 'A token that you will be using to send recurring messages for a specific topic that user has opted-in. You will receive a unique token for each topic user opts-in. This attribute must be sent as `TO` attribute when sending a recurring notification message.',
      },
      optInDuration: {
        type: 'string',
        description: 'A Timestamp with the lifetime of the optIn. When the time expires, the contact will have to make a re-optIn to keep receiving messages for the specific topic. A new webhook with a new `notificationRecipient` will be sent.',
      },
      payload: {
        type: 'string',
        description: 'The payload you sent on optin_request.',
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default optInResponse;