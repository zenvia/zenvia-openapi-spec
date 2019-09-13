import { SecuritySchemeObject } from 'openapi3-ts';

const jwt: SecuritySchemeObject = {
  description: 'User JWT token used for Zenvia front-end service',
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
};

export default jwt;
