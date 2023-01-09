import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './attachment-base';

const attachmentDynamic: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      fieldName: {
        type: 'string',
        description: 'The name of the field from where the URL of the file to be sent will be obtained.',
        example: 'catalogURL',
      },
    },
    required: [
      'fieldName',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default attachmentDynamic;
