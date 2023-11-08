import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as fileRef } from './bases/file';
import { ref as contactRef } from './email/recipient';
import { ref as replyToRef } from './email/reply-to';
import { createComponentRef } from '../../../../utils/ref';

const email: SchemaObject = {
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
        minLength: 1,
      },
      html: {
        type: 'string',
        maxLength: 32768,
        description: `The e-mail content in HTML format.
                      <br>Inline attachment *is supported*. The *cid* of the content is the *fileName*.
                      <br>Ex: \`<img src="cid:example2.jpeg">\`.`,
        example: '<b>Hi!</b><br><img src="cid:example2.jpeg">',
      },
      attachments: {
        type: 'array',
        items: {
          $ref: fileRef,
        },
        description: 'E-mail attachments.',
        example: [{ fileUrl: 'https://zenvia.com/example1.pdf' }, { fileUrl: 'https://zenvia.com/example2.jpg', fileName: 'example2.jpeg' }],
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
          $ref: replyToRef,
        }],
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
export default email;
