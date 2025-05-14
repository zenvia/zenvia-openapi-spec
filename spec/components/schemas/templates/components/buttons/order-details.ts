// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';

const orderDetails: SchemaObject = {
  type: 'object',
  description: '*Only applicable to [WhatsApp](#tag/WhatsApp) channel*',
  allOf: [{
    $ref: baseRef,
  }],
};

export const ref = createComponentRef(__filename);
export default orderDetails;
