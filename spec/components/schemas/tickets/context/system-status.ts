import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const systemStatus: SchemaObject = {
  title: 'System Status',
  description: 'System status linked with the status of the ticket',
  type: 'string',
  enum: [
    'New', 'InAttendance', 'Stopped', 'Canceled', 'Resolved', 'Closed'
  ],
  readOnly: true,
};

export const ref = createComponentRef(__filename);
export default systemStatus;


