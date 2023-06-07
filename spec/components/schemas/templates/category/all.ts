import * as _ from 'lodash';
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import base from './base';

const all: SchemaObject = _.cloneDeep(base);

all.enum.push(
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
  'OTHER',
);

export const ref = createComponentRef(__filename);
export default all;
