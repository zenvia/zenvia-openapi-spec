import { SchemaObject } from 'openapi3-ts';
import { ref as allWhatsContentsRef } from './whatsapp';
import { ref as allSmsContentsRef } from './sms';
import { ref as allRcsContentsRef } from './rcs';
import { ref as allEmailContentsRef } from './email';
import { ref as allFacebookContentsRef } from './facebook';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: allWhatsContentsRef,
  },{
    $ref: allSmsContentsRef,
  },{
    $ref: allFacebookContentsRef,
  },{
    $ref: allRcsContentsRef,
  },{
    $ref: allEmailContentsRef,
  }],
  discriminator: {
    propertyName: 'channel',
    mapping: {
      WHATSAPP: allWhatsContentsRef,
      SMS: allSmsContentsRef,
      RCS: allRcsContentsRef,
      EMAIL: allEmailContentsRef,
      FACEBOOK: allFacebookContentsRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
