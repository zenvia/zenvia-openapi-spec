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
          type: 'string',
        },
        title: 'Courtesy Copy',
        description: 'List of e-mails addresses to be copied on the e-mail.',
        example: ['example1@zenvia.com', 'example2@zenvia.com'],
      },
      bcc: {
        type: 'array',
        items: {
          type: 'string',
        },
        title: 'Blind Courtesy Copy',
        description: 'List of e-mails addresses to be secretly copied on the e-mail.',
        example: ['example3@zenvia.com', 'example4@zenvia.com'],
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
