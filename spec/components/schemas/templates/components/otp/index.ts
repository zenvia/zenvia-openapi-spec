import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as oneTapRef } from './one-tap';
import { ref as copyCodeRef } from './copy-code';

export const otp: SchemaObject = {
  title: 'OTP',
  description: `Template OTP button. A copy code button copies the one-time password or code to the user's clipboard. The user can then manually switch to your app and paste the password or code into your app's interface. A one-tap autofill button automatically loads and passes your app the one-time password or code.
                <br>*Only applicable to [WhatsApp](#tag/WhatsApp) channel.*`,
  type: 'object',
  oneOf: [{
    $ref: oneTapRef,
  }, {
    $ref: copyCodeRef,
  }],
  required: ['type'],
  discriminator: {
    propertyName: 'type',
    mapping: {
      ONE_TAP: oneTapRef,
      COPY_CODE: copyCodeRef,
    },
  },
  example: {
    type: 'ONE_TAP',
    copyButtonText: 'Copy the code',
    addSecurityRecommendation: true,
    codeExpirationMinutes: 5,
    autofillText: 'autofill',
    packageName: 'com.example.myapplication',
    signatureHash: 'K8a%2FAINcGX7',
  },
};

export const ref = createComponentRef(__filename);
export default otp;
