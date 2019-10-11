// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const status: SchemaObject = {
  title: 'Status of template',
  type: 'string',
  enum: [
    'APPROVED',
    'REFUSED',
    'PENDING',
    'CANCELED',
  ],
};

export const ref = createComponentRef(__filename);
export default status;
