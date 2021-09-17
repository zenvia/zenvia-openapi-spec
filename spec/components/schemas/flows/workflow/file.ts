// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as flowsWorkflowBaseRef } from './base';

const base: SchemaObject = {
  title: 'Flow Batch Object for request with file.',
  description: 'This is a Flow Batch object model for request with file.',
  allOf: [
    {
      $ref: flowsWorkflowBaseRef,
    },
    {
      type: 'object',
      properties: {
        fileHeader: {
          description: 'File headers (CSV), ignored when fileContainsHeader=true (you can send empty in this case)',
          type: 'string',
          example: 'sms,name,product,deliveryDate',
        },
        fileContainsHeader: {
          description: 'A list of value (CSV)',
          type: 'boolean',
          example: true,
        },
        fileCharset: {
          description: 'File headers (CSV)',
          type: 'string',
          example: 'UTF-8',
        },
      },
      required: [
        'fileHeader',
        'fileContainsHeader',
      ],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default base;
