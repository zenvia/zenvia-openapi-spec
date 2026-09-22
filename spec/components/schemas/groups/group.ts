import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const group: SchemaObject = {
  title: 'Group',
  description: 'A team agents are organized into for conversation distribution.',
  type: 'object',
  properties: {
    id: {
      title: 'Id',
      description: 'The group identifier.',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'The group name.',
      type: 'string',
      readOnly: true,
    },
    displayName: {
      title: 'Display name',
      description: 'A human-friendly name for the group, when configured.',
      type: 'string',
      readOnly: true,
    },
    enabled: {
      title: 'Enabled',
      description: 'Whether the group is enabled. Disabled groups are never returned by the list endpoint.',
      type: 'boolean',
      readOnly: true,
    },
  },
  required: [
    'id',
    'name',
    'enabled',
  ],
};

export const ref = createComponentRef(__filename);
export default group;
