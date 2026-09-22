import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const agent: SchemaObject = {
  title: 'Agent',
  description: 'An agent belonging to a group, with their current availability.',
  type: 'object',
  properties: {
    id: {
      title: 'Id',
      description: 'The agent identifier.',
      type: 'string',
      readOnly: true,
    },
    firstName: {
      title: 'First name',
      type: 'string',
      readOnly: true,
    },
    lastName: {
      title: 'Last name',
      type: 'string',
      readOnly: true,
    },
    available: {
      title: 'Available',
      description: 'Whether the agent is currently available to receive conversations.',
      type: 'boolean',
      readOnly: true,
    },
    status: {
      title: 'Status',
      description: 'The agent\'s current status.',
      type: 'string',
      enum: ['AVAILABLE', 'PRE_PAUSE', 'PAUSE', 'UNAVAILABLE'],
      readOnly: true,
    },
  },
  required: [
    'id',
    'firstName',
    'available',
    'status',
  ],
};

export const ref = createComponentRef(__filename);
export default agent;
