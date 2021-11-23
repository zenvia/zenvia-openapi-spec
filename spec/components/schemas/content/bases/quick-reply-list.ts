import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as buttonsRef } from './buttons/all';

export const quickReplyList: SchemaObject = {
  type: 'array',
  title: 'Quick reply buttons',
  description: `Horizontal list of buttons displayed after the content. These *will* fade away once one is clicked.<br>
    <br>*__RCS__: A maximum of 11 buttons is supported.*
    <br>*__Instagram__: Only \`text\` buttons are supported.*
    <br>*__Facebook__: Only \`text\` and \`dial\` buttons are supported.*`,
  maxItems: 13,
  items: {
    $ref: buttonsRef,
  },
};

export const ref = createComponentRef(__filename);
export default quickReplyList;
