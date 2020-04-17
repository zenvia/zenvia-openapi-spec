// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const category: SchemaObject = {
  title: 'Category',
  description: 'Category of use for this template',
  type: 'string',
  enum: [
    'ACCOUNT_UPDATE',
    'PAYMENT_UPDATE',
    'PERSONAL_FINANCE_UPDATE',
    'SHIPPING_UPDATE',
    'RESERVATION_UPDATE',
    'ISSUE_RESOLUTION',
    'APPOINTMENT_UPDATE',
    'TRANSPORTATION_UPDATE',
    'TICKET_UPDATE',
    'ALERT_UPDATE',
    'AUTO_REPLY',
  ],
};

export const ref = createComponentRef(__filename);
export default category;
