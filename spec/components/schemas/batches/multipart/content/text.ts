import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from '../../../content/base';

const text: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'text',
      },
      text: {
        description: 'Text to be sent to all recipients in the contact file. The text supports the use of variables, for its creation the following pattern must be used: **{{variable}}**',
        type: 'string',
        example: 'Hello {{name}} your service protocol is number {{protocol}}',
      },
    },
    required: [
      'type',
      'text',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default text;
