import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as justificationRef } from './context/justification';
import { ref as statusRef } from './context/status';

const base: SchemaObject = {
  title: 'Ticket Status Change',
  type: 'object',
  properties: {
    status: {
      $ref: statusRef,
    },
    justification: {
      $ref: justificationRef,
    },
    permanencyTimeFullTime: {
      title: 'Permanency Full Time',
      description: 'Duration of the status in calendar hours. Returns the total time in seconds.',
      type: 'number',
      readOnly: true,
    },
    permanencyTimeWorkingTime: {
      title: 'Permanency Working Time',
      description: 'Duration of the status in business hours. Returns the total time in seconds.',
      type: 'number',
      readOnly: true,
    },
    updatedById: {
      title: 'Updated by identification',
      description: 'User that changed the ticket status.',
      type: 'string',
      nullable: true,
      readOnly: true,
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
