import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as allContentsRef } from '../content/whatsapp/all';
import { createComponentRef } from '../../../../utils/ref';
import { ref as visitorSchemaRef } from './visitor';
import { ref as referralSchemaRef } from './referral';

const all: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      visitor: {
        $ref: visitorSchemaRef,
      },
      referral: {
        $ref: referralSchemaRef,
      },
      contents: {
        items: {
          $ref: allContentsRef,
        },
      },
      idRef: {
        title: 'Referenced Message ID',
        description: `When a user sends a message quoting a previous message, the identifier of the quoted message will be provided here.
* On reply button clicks (see [replyable text](#section/Replyable-Text) and [card](#section/Card) sections), this will refer to the ID of the clicked message.
* On [SMS channel](#tag/SMS), this will refer to the ID of the last message sent to the contact.

*Only applicable to [WhatsApp](#tag/WhatsApp), [Instagram](#tag/Instagram), [SMS](#tag/SMS), [Facebook](#tag/Facebook) and [RCS](#tag/RCS) channels.*`,
        type: 'string',
        readOnly: true,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
