// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const status: SchemaObject = {
  title: 'Status of subscription',
  type: 'string',
  enum: [
    'ACTIVE',
    'INACTIVE',
  ],
};

export const ref = createComponentRef(__filename);
export default status;
