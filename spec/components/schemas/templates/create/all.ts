import { SchemaObject } from 'openapi3-ts';
import { ref as allWhatsContentsRef } from './whatsapp';
import { ref as allSmsContentsRef } from './sms';
import { ref as allRcsContentsRef } from './rcs';
import { ref as allEmailContentsRef } from './email';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: allWhatsContentsRef,
  },{
    $ref: allSmsContentsRef,
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
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
