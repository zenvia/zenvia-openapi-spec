import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as actionsRef } from './actions';
import { ref as quickRepliesRef } from './quick-replies';
import { ref as mixedRef } from './mixed';
import { ref as orderDetailsRef } from './order-details';

export const buttons: SchemaObject = {
  title: 'Buttons',
  description: `Template buttons.
                <br>*Only applicable to [WhatsApp](#tag/WhatsApp) and [RCS](#tag/RCS) channels.*`,
  type: 'object',
  oneOf: [{
    $ref: actionsRef,
  }, {
    $ref: quickRepliesRef,
  }, {
    $ref: orderDetailsRef,
  }, {
    $ref: mixedRef,
  }],
  required: ['type'],
  discriminator: {
    propertyName: 'type',
    mapping: {
      ACTIONS: actionsRef,
      QUICK_REPLIES: quickRepliesRef,
      MIXED: mixedRef,
      ORDER_DETAILS: orderDetailsRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default buttons;
