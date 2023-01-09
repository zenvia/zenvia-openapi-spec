// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const body: SchemaObject = {
  title: 'Body',
  description: 'Template body',
  type: 'object',
  required: ['type', 'text'],
  properties: {
    type: {
      title: 'Body type',
      description: 'The body should have a fixed or variable text.<br>Variable text can have variables using format `{{var_name}}`.',
      type: 'string',
      enum: ['TEXT_FIXED', 'TEXT_TEMPLATE'],
    },
    text: {
      type: 'string',
      title: 'Body text',
      description: 'Body content. In the [E-Mail](#tag/E-Mail) channel this is handled as a *HTML*, while for most channels this is handled as *markdown*.',
    },
  },
};

export const ref = createComponentRef(__filename);
export default body;
