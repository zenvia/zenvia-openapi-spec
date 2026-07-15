import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const validationErrorSchema: SchemaObject = {
  title: 'ValidationError',
  type: 'object',
  required: ['code', 'message'],
  properties: {
    code: {
      type: 'string',
      description: 'Machine-readable error code.',
      enum: ['MUTUALLY_EXCLUSIVE_FIELDS'],
    },
    message: {
      type: 'string',
      description: 'Human-readable error description',
    },
    fields: {
      type: 'array',
      description: 'Fields involved in the validation error.',
      items: {
        type: 'string',
      }
    }
  }
}

export const ref = createComponentRef(__filename);
export default validationErrorSchema;
