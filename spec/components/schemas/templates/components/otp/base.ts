import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const contentBase: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title:  'OTP is an authentication button. Set to COPY_CODE if you want the template to use a copy code button, or ONE_TAP to have it use a one-tap autofill button',
      type: 'string',
    },
  },
  required: [
    'type',
  ],
};

export const ref = createComponentRef(__filename);
export default contentBase;
