import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const category: ParameterObject = {
  name: 'category',
  in: 'query',
  required: false,
  description: 'Filter by category',
  schema: {
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
      'AUTHENTICATION',
      'MARKETING',
      'UTILITY',
      'OTHER',
      'CUSTOMER_FEEDBACK',
      'CONFIRMED_EVENT_UPDATE',
      'POST_PURCHASE_UPDATE',
    ],
  },
  example: 'UTILITY',
};

export const ref = createComponentRef(__filename);
export default category;
