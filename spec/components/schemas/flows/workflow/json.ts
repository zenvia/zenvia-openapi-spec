// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as flowsWorkflowBaseRef } from './base';

const base: SchemaObject = {
  title: 'Flow Batch Object for request with json request.',
  description: 'This is a Flow Batch object model for request with json request.',
  allOf: [
    {
      $ref: flowsWorkflowBaseRef,
    },
    {
      type: 'object',
      properties: {
        fileHeader: {
          description: 'File headers (CSV)',
          type: 'string',
          example: 'sms,name,product,deliveryDate',
        },
        fileLines: {
          description: 'A list of value (CSV)',
          type: 'array',
          minItems: 1,
          items: {
            type: 'string',
            example: '5511999999999,John,Smartphone,20/07/2021',
          },
        },
      },
      required: [
        'fileHeader',
        'fileLines',
      ],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default base;
