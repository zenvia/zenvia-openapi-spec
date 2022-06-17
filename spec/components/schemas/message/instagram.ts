import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as allContentsRef } from '../content/instagram/all';
import { ref as representativeRef } from './representative';
import { createComponentRef } from '../../../../utils/ref';

const all: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      contents: {
        title: 'Message Contents',
        description: 'A list of content to be sent',
        type: 'array',
        items: {
          $ref: allContentsRef,
        },
        minItems: 1,
      },
      representative: {
        allOf: [{
          $ref: representativeRef,
        }],
        example: {
          type: 'HUMAN',
        },
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
