// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Contact Custom Data Field',
  description: 'Definition of a field which can be provided on a contact data.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the contact data field to be created. This will be field name to be used on the [contacts API](#tag/Contacts/paths/~1contacts/post).',
      type: 'string',
      example: 'my_field',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Friendly name for the field. This is used on user interfaces like [Zenvia Campaign](https://app.zenvia.com/campaign).',
      type: 'string',
      example: 'My Field',
    },
    type: {
      title: 'Type',
      description: 'The type of values stored in this field. It affects validation and rendering in user interfaces.',
      type: 'string',
      example: 'date',
      enum: [
        'string',
        'number',
        'date',
      ],
      default: 'string',
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the contact data field creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
  },
  required: [
    'name',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
