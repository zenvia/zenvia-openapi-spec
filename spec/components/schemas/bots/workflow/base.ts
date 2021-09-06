// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as botsBaseRef } from '../base';

const base: SchemaObject = {
  title: 'Bot Object with Workflow',
  description: 'This is a Bot object model with Workflow.',
  type: 'object',
  allOf: [
    {
      $ref: botsBaseRef,
    },
    {
      type: 'object',
      properties: {
        workflowId: {
          type: 'string',
          description: 'The workflow identifier.',
          example: 'c2c3e42d-6fb7-4ad6-897a-dd7613469f58',
        },
        campaignId: {
          type: 'string',
          description: 'The campaign identifier.',
          example: 'Campanha de oferta',
        },
      },
      required: [
        'workflowId',
      ]
    }
  ],
};

export const ref = createComponentRef(__filename);
export default base;
