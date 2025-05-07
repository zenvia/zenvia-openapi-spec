import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as systemStatusTypeRef } from './system-status-type';

const base: SchemaObject = {
  title: 'Status',
  type: 'object',
  readOnly: true,
  properties: {
    id: {
      title: 'Status ID',
      description: 'Status identifier.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Status Name',
      description: 'Name of the status.',
      type: 'string',
      readOnly: true,
    },
    type: {
      $ref: systemStatusTypeRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
