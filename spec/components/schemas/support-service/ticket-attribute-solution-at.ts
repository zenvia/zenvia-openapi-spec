import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket solution',
  description: 'Ticket solution.',
  type: 'object',
  properties: {
    solutionAt: {
      title: 'Solution At',
      description: 'Ticket resolution due date. If the resolution due date is updated via the API, it will be considered as having been set manually by the agent who added the last ticket note.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    updatedById: {
      title: 'Updated by identification',
      description: 'User that made the changes.',
      type: 'string',
      nullable: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
