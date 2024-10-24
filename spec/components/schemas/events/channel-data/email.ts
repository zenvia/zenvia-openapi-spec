import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const email: SchemaObject = {
  type: 'object',
  title: 'Email',
  description: 'Email specific details about the message',
  properties: {
    clientInfo: {
      title: 'Client Information',
      description: 'Information about the client that interacted with the message',
      type: 'object',
      properties: {
        sgMachineOpen: {
          title: 'Sendgrid Machine Open',
          description: 'Indicates whether SendGrid has received signals indicating that a recipient with MPP enabled has triggered an open event or if the message was conventionally opened',
          type: 'boolean',
        },
        userAgent: {
          title: 'User agent',
          description: 'User agent responsible for the event, usually a web browser',
          type: 'string',
          example: 'Mozilla/5.0',
        },
        sourceIp: {
          title: 'Client IP address',
          type: 'string',
          example: '255.255.255.255',
        },
        url: {
          title: 'URL',
          description: 'For URL-related events like CLICKED status, the URL that has been interacted with.',
          type: 'string',
          example: 'https://example.com/clicked-link',
        },
      },
      required: [ 'sourceIp' ]
    },
  },
};

export const ref = createComponentRef(__filename);
export default email;
