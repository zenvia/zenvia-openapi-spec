// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as botsWorkflowBaseRef } from './base';

const base: SchemaObject = {
  title: 'Bot Object for json request.',
  description: 'This is a Bot object model for json request.',
  allOf: [
    {
      $ref: botsWorkflowBaseRef,
    },
    {
      type: 'object',
      properties: {
        fileHeader: {
          description: 'File headers (CSV)',
          type: 'string',
          example: 'sms,name,product,deliveryDate',
        },
        contacts: {
          description: 'A list of value (CSV)',
          type: 'array',
          minItems: 1,
          items: {
            type: 'string',
            example: '5511999999999,John,Smartphone,20/07/2021',
          }
        }
      },
      required: [
        'fileHeader',
        'contacts',
      ]
    }
  ]
};

export const ref = createComponentRef(__filename);
export default base;
