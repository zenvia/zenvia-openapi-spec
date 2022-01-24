import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as flowBatchesBaseRef } from './base';
import { ref as flowBatchesFileRef } from './file';
import { ref as flowBatchesContentRef } from './content';

const item: SchemaObject = {
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
          ],
          properties: {
            file: {
              $ref: flowBatchesFileRef,
            },
          },
        },
      },
    },
  ],
};

export const ref = createComponentRef(__filename);
export default item;
