import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const subscription: SchemaObject = {
  title: 'Fields to OAUTH2 authentication request',
  properties: {
    grantType: {
      title: 'GranType',
      type: 'string',
      enum: [
        'client_credentials',
      ],
      default: 'client_credentials',
    },
    clientSecret: {
      title: 'Client Secret',
      type: 'string',
    },
    clientId: {
      title: 'Client Id',
      type: 'string',
    },
    refreshToken: {
      title: 'Refresh Token',
      type: 'string',
    },
    expiresIn: {
      title: 'Default time expiration (in seconds)',
      type: 'number',
    },
  },
};

export const ref = createComponentRef(__filename);
export default subscription;
