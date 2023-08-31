import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const category: SchemaObject = {
  title: 'Category',
  description: 'Category of use for this template',
  type: 'string',
  enum: [
    'MARKETING',
    'OTHER',
  ],
};

export const ref = createComponentRef(__filename);
export default category;
