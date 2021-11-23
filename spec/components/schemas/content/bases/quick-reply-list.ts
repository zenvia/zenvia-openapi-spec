import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as buttonsRef } from './buttons/all';

export const quickReplyList: SchemaObject = {
  type: 'array',
  title: 'Quick reply buttons',
  description: `Horizontal list of buttons displayed after the content. These *will* fade away once one is clicked.<br>
    <br>*RCS: A maximum of 11 buttons is supported.*
    <br>*Instagram: Only postback buttons are supported.*
    <br>*Facebook: Only postback and dial buttons ares supported.*`,
  maxItems: 13,
  items: {
    $ref: buttonsRef,
  },
};

export const ref = createComponentRef(__filename);
export default quickReplyList;
