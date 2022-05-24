// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Contact ID',
  description: 'The ID of a contact.',
  type: 'string',
  example: 'contact-id',
};

export const ref = createComponentRef(__filename);
export default base;
