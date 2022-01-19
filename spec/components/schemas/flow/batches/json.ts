import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as flowBatchesBaseRef } from './base';
import { ref as flowBatchesContentRef } from './content';

const json: SchemaObject = {
  title: 'Flow Batch Object for request with json request.',
  description: 'This is a Flow Batch object model for request with json request.',
  allOf: [
    {
      $ref: flowBatchesBaseRef,
    },
    {
      type: 'object',
      properties: {
        content: {
          type: 'object',
          allOf: [
            {
              $ref: flowBatchesContentRef,
            },
            {
              type: 'object',
              required: [
                'fieldNames',
                'fields',
              ],
            },
          ],
          properties: {
            fields: {
              description: 'A list of field values, each item refers to a contact',
              type: 'array',
              minItems: 1,
              items: {
                type: 'string',
              },
              example: [
                        ['5511999999999', 'John', 'Smartphone', '20/07/2021'], 
                        ['5511911111111', 'Paul', 'Tablet', '21/07/2021']
                      ],
              writeOnly: true,
            },
          },
        },
      },
      required: ['content'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default json;
