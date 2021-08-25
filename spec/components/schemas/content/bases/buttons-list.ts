import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as buttonsRef } from './buttons/all';

export const buttonsList: SchemaObject = {
  type: 'array',
  title: 'Buttons',
  description: `Vertical list of buttons displayed inside a card. These will *not* fade away once one it's clicked.
    <br><br>*A maximum of 4 buttons is supported by RCS channel, but they might not be shown if they do not fit in the available space.*`,
  maxItems: 4,
  items: {
    $ref: buttonsRef,
  },
};

export const ref = createComponentRef(__filename);
export default buttonsList;
