// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as botsWorkflowBaseRef } from './base';

const base: SchemaObject = {
  title: 'Bot Object for request with file.',
  description: 'This is a Bot object model for request with file.',
  allOf: [
    {
      $ref: botsWorkflowBaseRef,
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
          example: 'true',
        },
        charset: {
          description: 'File headers (CSV)',
          type: 'string',
          example: 'UTF-8',
        },
      },
      required: [
        'fileHeader',
        'fileContainsHeader',
      ]
    }
  ]
};

export const ref = createComponentRef(__filename);
export default base;
