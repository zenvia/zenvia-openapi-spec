// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const notificationEmail: SchemaObject = {
  title: 'Notification e-mail',
  description: 'E-mail list (comma-separated) to send notifications about the message template approving process',
  type: 'string',
};

export const ref = createComponentRef(__filename);
export default notificationEmail;
