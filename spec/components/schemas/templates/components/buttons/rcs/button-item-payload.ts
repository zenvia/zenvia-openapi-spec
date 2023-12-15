import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';

const buttonItemPayload: SchemaObject = {
  type: 'object',
  properties: {
    payload: {
      title: 'Return payload',
      description: 'Content to be sent back on button click.',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default buttonItemPayload;
