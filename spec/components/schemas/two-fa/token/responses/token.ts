import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as deliveryRef } from '../../configuration/requests/delivery';
import { ref as verifyRef } from '../../configuration/requests/verify';

const sendToken: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      example: '7388c68e-675e-435b-b2ec-f72677798678',
    },
    from: {
      type: 'string',
      example: 'email@email.com',
    },
    to: {
      type: 'string',
      example: 'received_email@email.com',
    },
    channel: {
      type: 'string',
      example: 'email',
    },
    locale: {
      type: 'string',
      example: 'pt_BR',
    },
    code: {
      type: 'string',
    },
    configurationId: {
      type: 'string',
      example: '88ff8743-22ba-44db-850b-5f54d6442cdd'
    },
    fields: {
      type: 'object',
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
      enum: ['PENDING', 'CANCELLED', 'VERIFIED'],
      example: 'PENDING',
    },
    remoteip: {
      type: 'string',
      example: '127.0.0.1:80'
    },
    verify: {
      type: 'string',
      $ref: verifyRef,
    },
    delivery: {
      type: 'string',
      $ref: deliveryRef,
    },
    expiresAt: {
      type: 'string',
      example: '2022-10-27T13:26:11.354Z',
    },
    createdAt: {
      type: 'string',
      example: '2022-10-27T13:25:11.354Z',
    },
    updatedAt: {
      type: 'string',
      example: '2022-10-27T13:25:11.354Z',
    },
  },  
};

export const ref = createComponentRef(__filename);
export default sendToken;