// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as multipartSmsBatchRef } from './multipart/batch.sms';
import { ref as multipartWhatsAppBatchRef } from './multipart/batch.whatsapp';

const base: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model.',
  oneOf: [{
    $ref: multipartSmsBatchRef,
  }, {
    $ref: multipartWhatsAppBatchRef,
  }],
  discriminator: {
    propertyName: 'channel',
    mapping: {
      SMS: multipartSmsBatchRef,
      WHATSAPP: multipartWhatsAppBatchRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
