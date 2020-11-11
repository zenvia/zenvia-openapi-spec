import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const text: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'text',
      },
      text: {
        description: 'Text to be sent',
        type: 'string',
        example: 'This is a text.',
      },
      payload: {
        description: 'Payload of selected button.',
        type: 'string',
        readOnly: true,
        title: 'read only',
      },
      popUpOnScreen: {
        type: 'boolean',
        default: false,
        writeOnly: true,
        title: 'write only',
        description: `When **true**, the message will pop up on screen (also known as flash message).
          <br>*Only applicable to [SMS channel](#tag/SMS).*`,
        example: 'true',
      },
      encodingMethod: {
        name: 'encodingMethod',
        type: 'string',
        enum: [
          'AUTO',
          'UNICODE',
          'ASCII',
        ],
        default: 'AUTO',
        writeOnly: true,
        title: 'write only',
        description: `The method used for selecting the message encoding used to dispatch the message to the provider.
          <br>The default value **AUTO** will select the encoding method based on the text content, so this is only necessary
          if you need to enforce **ASCII** method (not recommended), or to enforce **UNICODE** if you have any trouble with **AUTO**.
          <br>*Only applicable to [SMS channel](#tag/SMS).*`,
        example: 'AUTO',
      },
      reportId: {
        type: 'number',
        writeOnly: true,
        title: 'write only',
        description: `An id used for report purposes only (also known as aggregate id).
          <br>*Only applicable to [SMS channel](#tag/SMS).*`,
        example: 12345,
        minimum: -2147483648,
        maximum: 2147483647,
      },
    },
    required: [
      'type',
      'text',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default text;
