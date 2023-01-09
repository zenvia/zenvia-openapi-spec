// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as headerRef } from './header';
import { ref as bodyRef } from './body';
import { ref as footerRef } from './footer';
import { ref as buttonsRef } from './buttons';
import { ref as emailRef } from './email';
import { ref as attachmentsRef } from './attachments';
import { ref as metadataRef } from './metadata';

const header: SchemaObject = {
  title: 'Components',
  description: 'Message content of this template',
  type: 'object',
  required: [
    'body',
  ],
  properties: {
    header: {
      $ref: headerRef,
    },
    body: {
      $ref: bodyRef,
    },
    footer: {
      $ref: footerRef,
    },
    buttons: {
      $ref: buttonsRef,
    },
    attachments: {
      $ref: attachmentsRef,
    },
    email: {
      $ref: emailRef,
    },
    metadata: {
      $ref: metadataRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default header;
