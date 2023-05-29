// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as allRef } from './create/all';

const template: SchemaObject = {
  $ref: allRef,
};

export const ref = createComponentRef(__filename);
export default template;
