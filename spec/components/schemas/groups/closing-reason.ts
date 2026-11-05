import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const closingReason: SchemaObject = {
  title: 'Closing reason',
  description: 'A reason an agent can select when closing a conversation for a group.',
  type: 'object',
  properties: {
    key: {
      title: 'Key',
      description: 'The closing reason identifier, used as the `reason` when archiving a conversation.',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'The closing reason\'s display name.',
      type: 'string',
      readOnly: true,
    },
    type: {
      title: 'Type',
      description: 'Set when the closing reason counts as a sale (e.g. `PURCHASE`); absent otherwise.',
      type: 'string',
      readOnly: true,
    },
  },
  required: [
    'key',
    'name',
  ],
};

export const ref = createComponentRef(__filename);
export default closingReason;
