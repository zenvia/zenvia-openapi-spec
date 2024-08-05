import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as multipartBaseRef } from './base';
import { ref as textContentRef } from './content/text';
import { ref as templateContentRef } from './content/template';

const rcsBatch: SchemaObject = {
  allOf: [
    {
      $ref: multipartBaseRef,
    },
    {
      type: 'object',
      properties: {
        message: {
          type: 'object',
          properties: {
            contents: {
              type: 'array',
              items: {
                anyOf: [
                  {
                    $ref: textContentRef,
                  },
                  {
                    $ref: templateContentRef,
                  },
                ],
                discriminator: {
                  propertyName: 'type',
                  mapping: {
                    template: templateContentRef,
                    text: textContentRef,
                  },
                },
              },
            },
          },
        },
      },
    },
  ],
};

export const ref = createComponentRef(__filename);
export default rcsBatch;
