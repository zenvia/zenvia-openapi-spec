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
        machineOpen: {
          title: 'Machine Open',
          description: `Indicates whether the provider received signals indicating that a recipient with MPP (Apple's Mail Privacy Protection) enabled has triggered an open event or if the message was conventionally opened. This does not ensure a human recipient has opened a message, it infers it. Also, the recipient does not to be related to Apple; Apple's MPP is the name of the mechanism, not the attribution to a particular provider's inbox.
            <br>*Applicable only to messages that were sent using Sendgrid provider.*
`,
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
      required: [ 'sourceIp' ],
    },
  },
  required: [ 'clientInfo' ],
};

export const ref = createComponentRef(__filename);
export default email;
