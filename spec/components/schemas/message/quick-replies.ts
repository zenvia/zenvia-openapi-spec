import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as clickRef } from '../content/click';
import { createComponentRef } from '../../../../utils/ref';
import { ref as visitorSchemaRef } from './visitor';

const all: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      visitor: {
        $ref: visitorSchemaRef,
      },
      contents: {
        title: 'Message Contents',
        description: 'A list of content to be sent',
        type: 'array',
        items: {
          $ref: clickRef,
        },
        minItems: 1,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
