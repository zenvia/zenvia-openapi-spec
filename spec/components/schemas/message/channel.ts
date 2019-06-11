import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  type: 'string',
  title: 'Channel',
  description: 'Message channel',
  readOnly: true,
};

export const ref = createComponentRef(__filename);
export default base;
