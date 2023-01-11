import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const metadata: SchemaObject = {
  type: 'object',
  title: 'Metadata',
  description: 'Additional values related to the template but not used for messaging.',
  additionalProperties: {
    title: 'Metadata',
    description: 'These values are *not* evaluated as variables in the template.',
  },
};

export const ref = createComponentRef(__filename);
export default metadata;
