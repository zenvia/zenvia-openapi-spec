import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

export const ref = createComponentRef(__filename);

const contextValue: SchemaObject = {
  title: 'Context Value',
  description: 'A context value referenced by the journey\'s steps. Accepts a primitive (string, number or boolean), an array of context values, or a nested object of context values.',
  oneOf: [
    {
      type: 'string',
      title: 'String',
      example: 'elo',
    },
    {
      type: 'number',
      title: 'Number',
      example: 11,
    },
    {
      type: 'boolean',
      title: 'Boolean',
      example: true,
    },
    {
      type: 'array',
      title: 'Array',
      items: {
        $ref: ref,
      },
    },
    {
      type: 'object',
      title: 'Object',
      additionalProperties: {
        $ref: ref,
      },
    },
  ],
};

export default contextValue;
