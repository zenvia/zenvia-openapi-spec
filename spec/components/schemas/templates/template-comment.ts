// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const comment: SchemaObject = {
  type: 'object',
  required: [
    'author',
    'role',
    'text',
  ],
  properties: {
    id: {
      title: 'Comment ID',
      type: 'string',
      readOnly: true,
    },
    author: {
      title: 'Author',
      description: 'Author',
      type: 'string',
    },
    role: {
      title: 'Role',
      description: 'Author role',
      type: 'string',
      enum: ['REQUESTER', 'REVIEWER', 'WHATSAPP'],
    },
    text: {
      title: 'Text',
      description: 'Comment text',
      type: 'string',
    },
    createdAt: {
      title: 'Creation timestamp',
      description: 'Creation timestamp in ISO format',
      type: 'string',
      readOnly: true,
    },
    updatedAt: {
      title: 'Update timestamp',
      description: 'Update timestamp in ISO format',
      type: 'string',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default comment;
