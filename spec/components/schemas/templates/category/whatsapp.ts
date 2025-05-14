// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const category: SchemaObject = {
  title: 'Category',
  description: `Category of use for this template.
  <br>Payment templates can only belong to the MARKETING or UTILITY category`,
  type: 'string',
  enum: [
    'AUTHENTICATION',
    'MARKETING',
    'UTILITY',
  ],
};

export const ref = createComponentRef(__filename);
export default category;
