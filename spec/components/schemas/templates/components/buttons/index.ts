import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as actionsRef } from './actions';
import { ref as quickRepliesRef } from './quick-replies';

export const buttons: SchemaObject = {
  title: 'Buttons',
  description: 'Template buttons',
  type: 'object',
  oneOf: [{
    $ref: actionsRef,
  }, {
    $ref: quickRepliesRef,
  }],
  required: ['type'],
  discriminator: {
    propertyName: 'type',
    mapping: {
      ACTIONS: actionsRef,
      QUICK_REPLIES: quickRepliesRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default buttons;
