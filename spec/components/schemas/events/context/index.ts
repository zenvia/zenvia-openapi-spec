import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as buttonRef } from './button';

const channelData: SchemaObject = {
  type: 'object',
  title: 'Context',
  description: 'Details about where the event happened.',
  properties: {
    button: {
      $ref: buttonRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default channelData;
