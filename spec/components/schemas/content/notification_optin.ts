import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const optInResponse: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'notification_optin',
      },
      recurringMessagesRecipient: {
        type: 'string',
        description: 'The contact id that needs to be used to send the recurring messages for the topic the user has opted-in. You will receive a unique contact id for each topic the user opts-in. Therefore, this needs to be used the recipient (`to` attribute) when sending a recurring message. This contact id has an expiration timestamp.',
      },
      optInExpiration: {
        type: 'string',
        description: 'The timestamp when the opt-in will expire and no longer be usable, unless renewed.<br>Just before this expiration, the user will have the option to renew this topic opt-in. When the user makes a choice, a new [webhook](#section/MESSAGE) with a new [Notification OptIn](#section/Notification_OptIn) will be sent.',
      },
      optInStatus: {
        title: 'OptIn Status',
        description: 'Indicates whether this is a new opt-in, an opt-out, or a reopt-in.',
        type: 'string',
        example: 'OPTIN',
        enum: [
          'OPTIN',
          'OPTOUT',
          'REOPTIN'
        ]
      },
      frequency: {
        type: 'string',
        description: 'How often the recurring messages may be sent.',
        example: 'DAILY',
        enum: [
          'DAILY',
          'WEEKLY',
          'MONTHLY'
        ],
      },
      payload: {
        type: 'string',
        description: 'The payload set in the [opt-in request](#section/OptIn-Request) message of this opt-in response.',
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default optInResponse;