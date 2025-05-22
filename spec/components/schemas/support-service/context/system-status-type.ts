import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const systemStatus: SchemaObject = {
  title: 'Status Type',
  description: 'System status type.',
  type: 'string',
  enum: [
    'NEW',
    'IN_ATTENDANCE',
    'STOPPED',
    'CANCELED',
    'RESOLVED',
    'CLOSED',
  ],
  readOnly: true,
};

export const ref = createComponentRef(__filename);
export default systemStatus;


