// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Components',
  description: 'Message content of this template',
  type: 'object',
};

export const ref = createComponentRef(__filename);
export default base;
