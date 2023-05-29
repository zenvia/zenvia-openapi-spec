// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';

const otp: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      autofillText: {
        description: 'One-tap button text.',
        type: 'string',
        minLength: 1,
        maxLength: 25,
      },
      packageName: {
        description: "Your Android app's package name.",
        type: 'string',
      },
      signatureHash: {
        description: 'Your app signing key hash.',
        type: 'string',
      },
    },
    required: [
      'type',
      'copyButtonText',
      'autofillText',
      'packageName',
      'signatureHash',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default otp;
