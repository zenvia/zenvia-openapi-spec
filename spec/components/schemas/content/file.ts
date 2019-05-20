import { SchemaObject } from "openapi3-ts";
import { ref as baseRef } from './base';
import { createComponentRef } from "../../../../utils/ref";

const file: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      fileUrl: { type: 'string' },
      fileMimeType: { type: 'string' },
      fileCaption: { type: 'string' },
    },
    required: [
      'fileUrl',
      'fileMimeType',
    ],
  }]
};

export const ref = createComponentRef(__filename);
export default file;
