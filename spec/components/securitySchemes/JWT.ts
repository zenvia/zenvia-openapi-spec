import { SecuritySchemeObject } from 'openapi3-ts';

const jwt: SecuritySchemeObject = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
};

export default jwt;
