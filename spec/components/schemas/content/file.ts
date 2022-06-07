import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as fileRef } from './bases/file';
import { createComponentRef } from '../../../../utils/ref';

const file: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'file',
      },
    },
    required: [
      'type',
      'fileUrl',
    ],
  }, {
    $ref: fileRef,
  }, {
    properties: {
      fileCaption: {
        type: 'string',
        description: `Some description for the file.
                      <br>*Only applicable to [WhatsApp](#tag/WhatsApp), [RCS](#tag/RCS), [Telegram](#tag/Telegram) and [Google Business Messages](#tag/Google-Business-Messages) images and videos.*`,
        example: 'Some caption',
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default file;
