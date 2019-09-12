import { SecuritySchemeObject } from 'openapi3-ts';

const token: SecuritySchemeObject = {
  description: 'API access token',
  type: 'apiKey',
  in: 'header',
  name: 'X-API-TOKEN',
};

export default token;
