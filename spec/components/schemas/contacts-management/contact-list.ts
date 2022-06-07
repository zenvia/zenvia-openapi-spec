// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Contact List',
  description: 'List of contacts.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the contact list.',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Contact list\'s name.',
      type: 'string',
      example: 'Technology interest',
    },
    size: {
      title: 'Size',
      description: 'Number of contacts are in the list.',
      type: 'number',
      example: 10,
      readOnly: true,
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the contact list creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
    updatedAt: {
      title: 'Updated At',
      description: 'Timestamp of the contact list update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
