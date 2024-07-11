// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as multipartSmsBatchRef } from './multipart/batch.sms';
import { ref as multipartWhatsAppBatchRef } from './multipart/batch.whatsapp';
import { ref as multipartRcsBatchRef } from './multipart/batch.rcs';
import { ref as multipartEmailBatchRef } from './multipart/batch.email';

const base: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model',
  oneOf: [{
    $ref: multipartSmsBatchRef,
  }, {
    $ref: multipartWhatsAppBatchRef,
  },
  {
    $ref: multipartRcsBatchRef,
  },
  {
    $ref: multipartEmailBatchRef,
  }],
  discriminator: {
    propertyName: 'channel',
    mapping: {
      sms: multipartSmsBatchRef,
      whatsapp: multipartWhatsAppBatchRef,
      rcs: multipartRcsBatchRef,
      email: multipartEmailBatchRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
