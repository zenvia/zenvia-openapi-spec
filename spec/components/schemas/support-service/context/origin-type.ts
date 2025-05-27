import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const origin: SchemaObject = {
  title: 'Origin',
  description: 'The creation origin',
  type: 'string',
  enum: [
    'OTHER',
    'AGENT_IN_SYSTEM',
    'IMPORTED_EMAIL',
    'SYSTEM_TRIGGER',
    'TICKETS_API',
    'CHAT',
  ],
  readOnly: true,
};

export const ref = createComponentRef(__filename);
export default origin;
