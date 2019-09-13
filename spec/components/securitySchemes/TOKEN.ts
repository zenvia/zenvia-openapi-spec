import { SecuritySchemeObject } from 'openapi3-ts';

const token: SecuritySchemeObject = {
  description: 'Token created on API console for clients using server to server integration',
  type: 'apiKey',
  in: 'header',
  name: 'X-API-TOKEN',
};

export default token;
