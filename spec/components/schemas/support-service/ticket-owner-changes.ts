
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ownerTeamRef } from './context/owner-team';

const base: SchemaObject = {
  title: 'Ticket Owner Change',
  type: 'object',
  properties: {
    ownerId: {
      title: 'Owner ID',
      description: 'Agent that was previously assigned to ticket.',
      type: 'string',
      readOnly: true,
      nullable: true,
      example: '5404ed19-2994-4831-bb33-627e27b18ab1',
    },
    ownerTeam: {
      $ref: ownerTeamRef,
    },
    permanencyTimeFullTime: {
      title: 'Permanency Full Time',
      description: 'Duration of the agent’s assignment in calendar hours. Returns the total time in seconds.',
      type: 'number',
      readOnly: true,
    },
    permanencyTimeWorkingTime: {
      title: 'Permanency Working Time',
      description: 'Duration of the agent’s assignment in business hours. Returns the total time in seconds.',
      type: 'number',
      readOnly: true,
    },
    updatedById: {
      title: 'Updated by identification',
      description: 'User that re-assigned the ticket.',
      type: 'string',
      readOnly: true,
      nullable: true,
      example: '5404ed19-2994-4831-bb33-627e27b18ab1',
    },
    updatedAt: {
      description: 'Timestamp of the update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
