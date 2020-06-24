import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const file: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      fileUrl: {
        type: 'string',
        description: 'The URL of the file to be sent.',
        example: 'https://example.com/document.pdf',
      },
      fileMimeType: {
        type: 'string',
        description: 'MIME type of the file to be sent. If not sent, the MIME type will be identified using the content type sent in the request header. For [WhatsApp channel](#tag/WhatsApp), see the [supported contents and sizes.](#section/Limitations)',
        example: 'application/pdf',
      },
      fileCaption: {
        type: 'string',
        description: 'Some description for the file. Only applicable to the [WhatsApp channel](#tag/WhatsApp).',
        example: 'Some caption',
      },
    },
    required: [
      'fileUrl',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default file;
