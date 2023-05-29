import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const contentBase: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title:  'Content type',
      description: 'Set to COPY_CODE if you want the template to use a copy code button, or ONE_TAP to use an one-tap autofill button',
      type: 'string',
    },
    copyButtonText: {
      description: 'Note that even if your template is using a one-tap autofill button, this value must still be supplied. If we are unable to validate your handshake the authentication template message will display a copy code button with this text instead.',
      type: 'string',
      minLength: 1,
      maxLength: 25,
    },
    addSecurityRecommendation: {
      description: 'Set to true if you want the template to include the text: "For your security, do not share this code". Set to false to exclude the text.',
      type: 'boolean',
    },
    codeExpirationMinutes: {
      description: 'Indicates number of minutes the password or code is valid. If omitted, the code expiration warning will not be displayed in the delivered message.',
      type: 'number',
      minimum: 1,
      maximum: 90,
    },
  },
  required: [
    'type',
    'copyButtonText',
  ],
};

export const ref = createComponentRef(__filename);
export default contentBase;
