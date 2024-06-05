import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as facebookTemplateCategoriesRef } from '../category/facebook';
import { ref as facebookComponents } from '../components/facebook';

const facebookTemplate: SchemaObject = {
  type: 'object',
  allOf: [{
    type: 'object',
    properties: {
      components: {
        $ref: facebookComponents,
      },
      category: {
        $ref: facebookTemplateCategoriesRef,
      },
    },
  }, {
    $ref: baseRef,
  }],

};

export const ref = createComponentRef(__filename);
export default facebookTemplate;
