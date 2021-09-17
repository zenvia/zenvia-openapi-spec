// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as flowsBaseRef } from '../base';

const base: SchemaObject = {
  title: 'Flow Batch Base Object',
  description: 'This is a Flow Batch Base model.',
  type: 'object',
  allOf: [
    {
      $ref: flowsBaseRef,
    },
    {
      type: 'object',
      properties: {
        flowId: {
          type: 'string',
          description: 'The flow identifier.',
          example: 'c2c3e42d-6fb7-4ad6-897a-dd7613469f58',
        },
        campaignName: {
          type: 'string',
          description: 'The campaign name.',
          example: 'Campanha de oferta',
        },
      },
      required: [
        'flowId',
      ],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default base;
