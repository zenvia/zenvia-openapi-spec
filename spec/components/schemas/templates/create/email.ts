import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as emailTemplateCategoriesRef } from '../category/email';
import { ref as emailComponents } from '../components/email-components';

const emailTemplate: SchemaObject = {
  type: 'object',
  allOf: [{
    type: 'object',
    properties: {
      components: {
        $ref: emailComponents,
      },
      category: {
        $ref: emailTemplateCategoriesRef,
      },
    },
  }, {
    $ref: baseRef,
  }],

};

export const ref = createComponentRef(__filename);
export default emailTemplate;
