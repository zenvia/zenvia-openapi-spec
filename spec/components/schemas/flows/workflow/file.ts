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
        file: {
          title: 'CSV file properties',
          description: 'Informations about the CSV file',
          type: 'object',
          properties: {
            header: {
              description: 'File headers (CSV), ignored when containsHeader=true (you can send empty in this case)',
              type: 'string',
              example: 'sms,name,product,deliveryDate',
            },
            containsHeader: {
              description: 'A list of value (CSV)',
              type: 'boolean',
              example: true,
            },
            charset: {
              description: 'File headers (CSV)',
              type: 'string',
              example: 'UTF-8',
            },
          },
          required: [
            'containsHeader',
          ],
        },
      },
    },
  ],
};

export const ref = createComponentRef(__filename);
export default base;
