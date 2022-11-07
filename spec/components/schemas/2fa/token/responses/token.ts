import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as deliveryRef } from '../../configuration/requests/delivery';
import { ref as verifyRef } from '../../configuration/requests/verify';

const sendToken: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'Verification UUID',
      example: '7388c68e-675e-435b-b2ec-f72677798678',
    },
    from: {
      type: 'string',
      description: 'Contact of origin',
      example: 'email@email.com',
    },
    to: {
      type: 'string',
      description: 'Contact receiver',
      example: 'received_email@email.com',
    },
    channel: {
      type: 'string',
      description: 'Channel used',
      enum: ['sms', 'email'],
      example: 'email',
    },
    locale: {
      type: 'string',
      description: 'Location configured',
      example: 'pt_BR',
    },
    code: {
      type: 'string',
      description: 'The code generated',
      example: '100569',
    },
    configurationId: {
      type: 'string',
      description: 'Token Configuration Creation',
      example: '88ff8743-22ba-44db-850b-5f54d6442cdd',
    },
    fields: {
      type: 'object',
      description: 'Fields with key words of the text that will be sent to the user',
      properties: {
        name: {
          type: 'string',
          description: 'Name of the user who will receive the code',
          example: 'Josh Doe',
        },
      },
    },
    status: {
      type: 'string',
      description: 'Status of the generated token',
      enum: ['PENDING', 'CANCELED', 'VERIFIED'],
      example: 'PENDING',
    },
    remoteip: {
      type: 'string',
      description: 'Ip of the user making the request to be authenticated',
      example: '127.0.0.1:80',
    },
    verify: {
      $ref: verifyRef,
    },
    delivery: {
      $ref: deliveryRef,
    },
    expiresAt: {
      title: 'Expiration timestamp',
      type: 'string',
      description: 'Timestamp of the expiration date',
      example: '2022-10-27T13:26:11.354Z',
    },
    createdAt: {
      title: 'Creation timestamp',
      type: 'string',
      description: 'Timestamp of token creation.',
      example: '2022-10-27T13:25:11.354Z',
    },
    updatedAt: {
      title: 'Update timestamp',
      type: 'string',
      description: 'Timestamp of updates',
      example: '2022-10-27T13:25:11.354Z',
    },
  },
};

export const ref = createComponentRef(__filename);
export default sendToken;
