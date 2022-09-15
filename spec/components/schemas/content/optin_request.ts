import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const notificationOptIn: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'optin_request',
      },
      medialUrl: {
        description: 'URL for the thumbnail the user will see.',
        type: 'string',
        example: 'https://cdn.zenvia.com/main-picture.jpg',
      },
      title: {
        description: 'The topic of the recurring notification subscription.',
        type: 'string',
        example: 'Weekly Sale'
      },
      frequency: {
        description: 'How often the messages will be sent after user opted-in.',
        type: 'string',
        enum: [
          'DAILY',
          'WEEKLY',
          'MONTHLY'
        ]
      },
      reOptIn: {
        description: 'Allow user to opt-in back again after opting-out.',
        type: 'string',
        enum: [
          'ENABLED',
          'DISABLED'
        ],
        default: 'ENABLED',
      },
      payload: {
        description: 'Content to be sent back as a message when the user clicks the button. By default, the `title` of the request will be used as payload.',
        type: 'string',
      },
      timezone: {
        description: `Indicates the timezone that will be used for scheduling the notifications.<br>
        <br>Example: 'America/Sao_Paulo'`,
        type: 'string',
      }
    },
    required: [
      'title',
      'frequency',
    ]
  }]
}

export const ref = createComponentRef(__filename);
export default notificationOptIn;