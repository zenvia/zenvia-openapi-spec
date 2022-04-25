import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as buttonsRef } from './buttons/all';

export const quickReplyList: SchemaObject = {
  type: 'array',
  title: 'Quick reply buttons',
  description: `Horizontal list of buttons displayed after the content. These *will* fade away once one is clicked.<br>
    <br>*[RCS](#tag/RCS): A maximum of 11 buttons are supported.*
    <br>*[Google Business Messages](#tag/GBM): A maximum of 13 buttons of 25 characters are supported. Types supported: \`dial\`, \`link\`, \`text\`.*
    <br>*[Instagram](#tag/Instagram): Only \`text\` buttons are supported.*
    <br>*[Facebook](#tag/Facebook): Only \`text\` buttons are supported.*`,
  maxItems: 13,
  items: {
    $ref: buttonsRef,
  },
};

export const ref = createComponentRef(__filename);
export default quickReplyList;
