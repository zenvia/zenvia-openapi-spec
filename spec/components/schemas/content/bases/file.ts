import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const sharedInfo = {
  mediaTag: '[RCS](#tag/RCS)',
  mimeTypeDescription: 'MIME type of the file to be sent. If not sent, the MIME type will be identified using the content type sent in the request header.',
  urlDownloadInfo: 'The image at this URL should be publicly accessible and downloadable.',
};

const fileBase: SchemaObject = {
  type: 'object',
  title: 'File',
  properties: {
    fileUrl: {
      type: 'string',
      description: `URL of the file to be sent. ${sharedInfo.urlDownloadInfo}`,
      example: 'https://zenvia.com/document.pdf',
    },
    thumbnailUrl: {
      type: 'string',
      description: `Image URL to be used as a thumbnail for **media** files. Accepted formats are PNG, JPEG and GIF. ${sharedInfo.urlDownloadInfo}.
                      <br> Only applicable to *${sharedInfo.mediaTag}*`,
      example: 'https://storage.com/image.png',
    },
    thumbnailMimeType: {
      type: 'string',
      description: `${sharedInfo.mimeTypeDescription}<br>
                      <br> Only applicable to *${sharedInfo.mediaTag}*`,
      example: 'image/png',
    },
    fileMimeType: {
      type: 'string',
      description: `${sharedInfo.mimeTypeDescription}<br>
                    <br>*[WhatsApp](#tag/WhatsApp): see [supported contents and sizes.](#section/WhatsApp-limitations)*
                    <br>*[Instagram](#tag/Instagram): see [supported contents and sizes.](#section/Instagram-limitations)*
                    <br>*[Telegram](#tag/Telegram): see [supported contents and sizes.](#section/Telegram-limitations)*
                    <br>*[E-Mail](#tag/E-Mail): see [supported contents and sizes.](#section/E-Mail-limitations)*
                    <br>*For the rest of the channels, the limitations are currently undocumented.*`,
      example: 'application/pdf',
    },
    fileName: {
      type: 'string',
      description: `The name of the file.
                    <br>*Only applicable to [WhatsApp](#tag/WhatsApp), [Facebook](#tag/Facebook), [Telegram](#tag/Telegram), [Google Business Messages](#tag/Google-Business-Messages) and [E-mail](#tag/E-Mail) documents.*`,
      example: 'document.pdf',
    },
    status: {
      type: 'string',
      description: `The completion state of the file upload.
                    <br>*This property is read-only. It is only included in incoming webhooks that contain file content*`,
      enum: [
        'ACCEPTED',
        'REJECTED',
      ],
    },
    reason: {
      type: 'string',
      description: `A concise code for the failure reason.
                    <br>*This property is read-only. It is only included in incoming webhooks that contain file content*`,
      enum: [
        'MIME_TYPE_NOT_SUPPORTED',
        'INTERNAL_ERROR',
        'SECURITY_CHECK',
        'SIZE_LIMIT',
      ],
    },
  },
  required: ['fileUrl'],
};

export const ref = createComponentRef(__filename);
export default fileBase;
