import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const websiteKeyResponse: SchemaObject = {
  title: 'Token Configuration Creation',
  type: 'object',
  description: 'Token configuration created response',
  properties: {
    websiteKey: {
      type: 'string',
      description: 'The platform generates a key that the client\'s frontend must use to identify itself',
      readOnly: true,
      example: 'XXXXXXXXXXXXXX',
    },
  },
};

export const ref = createComponentRef(__filename);
export default websiteKeyResponse;
