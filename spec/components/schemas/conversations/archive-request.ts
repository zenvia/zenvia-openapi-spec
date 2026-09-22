import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const archiveRequest: SchemaObject = {
  title: 'Archive conversation request',
  description: 'Archives (closes) the conversation with the given close reason.',
  type: 'object',
  properties: {
    reason: {
      title: 'Reason',
      description: 'The close reason key, as configured for the conversation\'s group. Fails with CLOSE_REASON_UNRESOLVABLE if the key is not valid for the organization.',
      type: 'string',
    },
  },
  required: [
    'reason',
  ],
};

export const ref = createComponentRef(__filename);
export default archiveRequest;
