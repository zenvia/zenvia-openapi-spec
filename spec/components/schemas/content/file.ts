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
      type: {
        type: 'string',
        example: 'file',
      },
      fileUrl: {
        type: 'string',
        description: 'URL of the file to be sent',
        example: 'https://example.com/document.pdf',
      },
      fileMimeType: {
        type: 'string',
        description: `MIME type of the file to be sent. If not sent, the MIME type will be identified using the content type sent in the request header.
                      <br>*For [WhatsApp channel](#tag/WhatsApp), see [supported contents and sizes.](#section/WhatsApp-limitations)*
                      <br>*For [Instagram channel](#tag/Instagram), see [supported contents and sizes.](#section/Instagram-limitations)*
                      <br>*For [Telegram channel](#tag/Telegram), see [supported contents and sizes.](#section/Telegram-limitations)*
                      <br>*For the rest of the channels, the limitations are currently undocumented.*`,
        example: 'application/pdf',
      },
      fileCaption: {
        type: 'string',
        description: `Some description for the file.
                      <br>*Only applicable to [WhatsApp](#tag/WhatsApp), [RCS](#tag/RCS), [Telegram](#tag/Telegram) and [Google Business Messages](#tag/Google-Business-Messages) images and videos.*`,
        example: 'Some caption',
      },
      fileName: {
        type: 'string',
        description: `The name of the file.
                      <br>*Only applicable to [WhatsApp](#tag/WhatsApp), [Facebook](#tag/Facebook), [Telegram](#tag/Telegram) and [Google Business Messages](#tag/Google-Business-Messages) documents.*`,
        example: 'document.pdf',
      },
    },
    required: [
      'type',
      'fileUrl',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default file;
