// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const category: SchemaObject = {
  title: 'Category',
  description: 'Category of use for this template',
  type: 'string',
  enum: [
    'ACCOUNT_UPDATE',
    'CUSTOMER_FEEDBACK',
    'CONFIRMED_EVENT_UPDATE',
    'POST_PURCHASE_UPDATE',
  ],
};

export const ref = createComponentRef(__filename);
export default category;
