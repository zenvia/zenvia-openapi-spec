// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const category: SchemaObject = {
  title: 'Category',
  description: 'Category of use for this template',
  type: 'string',
  enum: [
    'AUTHENTICATION',
    'MARKETING',
    'UTILITY',
  ],
};

export const ref = createComponentRef(__filename);
export default category;
