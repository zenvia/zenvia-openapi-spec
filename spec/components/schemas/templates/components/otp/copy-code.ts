// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';

const otp: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }],
  example: {
    type: 'COPY_CODE',
    copyButtonText: 'Copy the code',
    addSecurityRecommendation: true,
    codeExpirationMinutes: 5,
  },
};

export const ref = createComponentRef(__filename);
export default otp;
