import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as cardRef } from '../card';

const carousel: SchemaObject = {
  title: 'Carousel',
  description: '',
  type: 'object',
  required: [],
  properties: {
    type: {
      title: 'Cards type',
      description: 'The cards can beither fixed or unordered. An order for the unordered cards is selected on dispatch for that carousel template.',
      type: 'string',
      enum: ['CARD_FIXED','CARD_TEMPLATE'],
    },
    cards: {
      allOf: [{
        $ref: cardRef,
      }],
    }
  },
};

export const ref = createComponentRef(__filename);
export default carousel;
