import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as buttonsRef } from './buttons/all';

export const quickReplyList: SchemaObject = {
  type: 'array',
  title: 'Quick reply buttons',
  description: `Horizontal list of buttons displayed after the content. These *will* fade away once one is clicked.<br>
    <br>*[RCS](#tag/RCS): A maximum of 11 buttons is supported.*
    <br>*[Google Business Messages](#tag/Google-Business-Messages): Supported types: \`text\`, \`link\` and \`dial\`. A maximum of 25 characters is supported in each button.*
    <br>*[Instagram](#tag/Instagram): Supported type: \`text\`. A maximum of 20 characters is supported in each button.*
    <br>*[Facebook](#tag/Facebook): Supported type: \`text\`.*
    <br><br>*Only applicable to [RCS](#tag/RCS) and [Google Business Messages](#tag/Google-Business-Messages) channels for [Cards](#section/Card) and [Carousels](#section/Carousel).*`,
  maxItems: 13,
  items: {
    $ref: buttonsRef,
  },
};

export const ref = createComponentRef(__filename);
export default quickReplyList;
