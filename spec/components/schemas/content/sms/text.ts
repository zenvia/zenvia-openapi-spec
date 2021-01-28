import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { createComponentRef } from '../../../../../utils/ref';

const text: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: textRef,
  }, {
    type: 'object',
    properties: {
      encodingStrategy: {
        type: 'string',
        enum: [
          'AUTO',
          'MORE_CHARACTER_SUPPORT',
          'MORE_CHARACTERS_PER_MESSAGE',
        ],
        default: 'AUTO',
        writeOnly: true,
        title: 'write only',
        description: `The method used for selecting the message encoding used to dispatch the message to the provider.
          <br>The default value **AUTO** will select the encoding method based on the text content, so this is only necessary
          if you need to enforce **MORE_CHARACTERS_PER_MESSAGE** method (not recommended), or to enforce **MORE_CHARACTER_SUPPORT**
          if you have any trouble with **AUTO**.
          <br>*Only applicable to [SMS channel](#tag/SMS).*`,
        example: 'AUTO',
      },
      reportId: {
        'x-unpublished': true,
        deprecated: true,
        type: 'number',
        writeOnly: true,
        title: 'write only',
        description: `An id used for report purposes only (also known as aggregate id). It must be setup before use.
          <br>*Only applicable to [SMS channel](#tag/SMS).*`,
        example: 12345,
        minimum: -2147483648,
        maximum: 2147483647,
      },
      popUpOnScreen: {
        'x-unpublished': true,
        deprecated: true,
        type: 'boolean',
        default: false,
        writeOnly: true,
        title: 'write only',
        description: `When **true**, the message will pop up on screen (also known as flash message).
          <br>*Only applicable to [SMS channel](#tag/SMS).*`,
        example: true,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default text;
