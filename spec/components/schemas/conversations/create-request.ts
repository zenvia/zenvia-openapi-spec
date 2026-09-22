import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const createRequest: SchemaObject = {
  title: 'Create conversation request',
  description: 'Creates a new conversation for a contact identified by their channel address, or resumes an existing one for the same contact.',
  type: 'object',
  properties: {
    groupId: {
      title: 'Group id',
      description: 'The group the conversation should be queued or assigned to.',
      type: 'string',
    },
    agentId: {
      title: 'Agent id',
      description: 'Optional agent to directly assign the conversation to.',
      type: 'string',
    },
    channelAddress: {
      title: 'Channel address',
      description: 'The contact\'s channel address (a phone number or an e-mail address, depending on channelType).',
      type: 'string',
      example: '5511999999999',
    },
    channelType: {
      title: 'Channel type',
      description: 'The type of channel address supplied.',
      type: 'string',
      enum: ['PHONE', 'EMAIL'],
    },
    firstName: {
      title: 'First name',
      description: "The contact's first name.",
      type: 'string',
    },
    lastName: {
      title: 'Last name',
      description: "The contact's last name.",
      type: 'string',
    },
  },
  required: [
    'groupId',
    'channelAddress',
    'channelType',
    'firstName',
  ],
};

export const ref = createComponentRef(__filename);
export default createRequest;
