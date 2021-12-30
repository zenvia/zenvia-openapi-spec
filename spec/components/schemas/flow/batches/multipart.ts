import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as flowBatchesBaseRef } from './base';
import { ref as flowBatchesFileRef } from './file';
import { ref as flowBatchesContentRef } from './content';

const multipart: SchemaObject = {
  title: 'Flow Batch Object for request with file.',
  description: 'This is a Flow Batch object model for request with file.',
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
              $ref: flowBatchesContentRef
            },
          ],
          properties: {
            file: {
              $ref: flowBatchesFileRef
            }
          },
          required: ['file']
        }
      },
      required: ['content']
    }
  ],
};

export const ref = createComponentRef(__filename);
export default multipart;
