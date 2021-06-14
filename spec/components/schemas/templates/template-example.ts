import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const example: SchemaObject = {
  title: 'Examples',
  description: `Provides an example of possible model data. This helps during the review and approval process so that Facebook can understand what
                kind of messages you plan to send. Make sure they are examples and do not include personal or confidential information.
                If you decide to include variables and examples, provide them in the same number.`,
  type: 'object',
  properties: {
    variable_name: {
      title: 'variable name',
      description: `variable_name must be the variable to which the example will be assigned.
                    <br>If you are creating a template with media, the variable_name must be <code>imageUrl</code>, <code>documentUrl</code> or <code>videoUrl</code>,
                    being assigned the example url.`,
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default example;
