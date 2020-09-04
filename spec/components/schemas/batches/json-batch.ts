// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as smsBatchRef } from './batch.sms';
import { ref as whatsAppBatchRef } from './batch.whatsapp';

const base: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model.',
  allOf: [{
    oneOf: [{
      $ref: smsBatchRef,
    }, {
      $ref: whatsAppBatchRef,
    }],
    discriminator: {
      propertyName: 'channel',
      mapping: {
        SMS: smsBatchRef,
        WHATSAPP: whatsAppBatchRef,
      },
    },
  }, {
    type: 'object',
    properties: {
      contacts: {
        type: 'object',
      },
      columnMap: {
        type: 'object',
        readOnly: true,
      },
    },

    required: [
      'contacts',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default base;
