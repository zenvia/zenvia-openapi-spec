import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const ticketType: SchemaObject = {
  title: 'Ticket Type',
  type: 'string',
  nullable: false,
  readOnly: false,
  enum: [
    'INTERNAL',
    'PUBLIC',
  ],
};

export const ref = createComponentRef(__filename);
export default ticketType;


