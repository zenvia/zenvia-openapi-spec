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
        example: 'email',
      },
      subject: {
        type: 'string',
        description: 'The e-mail subject',
        example: 'Re: Ticket 12345',
      },
      html: {
        type: 'string',
        maxLength: 32768,
        description: 'HTML version of the e-mail. This is the normally shown version.',
        example: '<b>Hello!</b>',
      },
      attachments: {
        type: 'array',
        items: {
          $ref: fileRef,
        },
        description: 'E-mail attachments.',
        example: [{ fileUrl: 'https://zenvia.com/example1.pdf' }, { fileUrl: 'https://zenvia.com/example2.pdf' }],
      },
      cc: {
        type: 'array',
        items: {
          $ref: contactRef,
        },
        title: 'Courtesy Copy',
        description: 'List of e-mails addresses to be copied on the e-mail.',
        example: [
          { email: 'cc1@zenvia.com' },
          { email: 'cc2@zenvia.com', name: 'CC2' },
        ],
      },
      bcc: {
        type: 'array',
        items: {
          $ref: contactRef,
        },
        title: 'Blind Courtesy Copy',
        description: 'List of e-mails addresses to be secretly copied on the e-mail.',
        example: [
          { email: 'bcc1@zenvia.com' },
          { email: 'bcc2@zenvia.com', name: 'BCC2' },
        ],
      },
      replyTo: {
        allOf: [{
          type: 'object',
          title: 'Reply To',
          description: 'E-mail that will be set as recipient when a e-mail response is initiated.',
        }, {
          $ref: contactRef,
        }],
        example: { email: 'reply-to@zenvia.com', name: 'Service Care' },
      },
    },
    required: [
      'type',
      'subject',
      'html',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default file;
