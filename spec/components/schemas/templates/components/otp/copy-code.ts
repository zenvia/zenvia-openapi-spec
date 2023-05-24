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
      copyButtonText: {
        description: 'Note that even if your template is using a one-tap autofill button, this value must still be supplied. If we are unable to validate your handshake the authentication template message will display a copy code button with this text instead. Maximum 25 characters.',
        type: 'string',
      },
      addSecurityRecommendation: {
        description: 'Set to true if you want the template to include the string: "For your security, do not share this code". Set to false to exclude the string.',
        type: 'boolean',
      },
      codeExpirationMinutes: {
        description: 'Indicates number of minutes the password or code is valid. If omitted, the code expiration warning will not be displayed in the delivered message. You can use a number between 1-90',
        type: 'number',
      },
    },
    required: [
      'type',
      'copyButtonText',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default otp;
