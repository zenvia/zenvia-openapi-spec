// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as headerRef } from './header';
import { ref as bodyRef } from './body';
import { ref as attachmentsRef } from './attachments';
import { ref as emailRef } from './email';

const emailComponents: SchemaObject = {
  title: 'Components',
  description: 'Message content of this template',
  type: 'object',
  required: ['body'],
  properties: {
    header: {
      $ref: headerRef,
    },
    body: {
      $ref: bodyRef,
    },
    attachments: {
      $ref: attachmentsRef,
    },
    email: {
      $ref: emailRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default emailComponents;
