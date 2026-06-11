import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../message-status-base';
import { createComponentRef } from '../../../../../utils/ref';

const recordedRef: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      code: {
        type: 'string',
        example: 'RECORDED',
      },
      details: {
        type: 'object',
        description: 'Details of the call record',
        properties: {
          file: {
            type: 'object',
            properties: {
              url: {
                type: 'string',
                description: 'URL of the call recording file',
              },
              name: {
                type: 'string',
                description: 'Name of the call recording file',
              },
              sizeBytes: {
                type: 'number',
                description: 'Size of the call recording file in bytes',
              },
              mimeType: {
                type: 'string',
                description: 'Type of the call recording file',
              },
            },
          },
        },
      },
    },
    required: ['code'],
  }],
};


export const ref = createComponentRef(__filename);
export default recordedRef;
