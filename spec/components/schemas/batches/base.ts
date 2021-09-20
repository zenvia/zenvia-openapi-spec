// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model',
  type: 'object',
  properties: {
    id: {
      title: 'Batch ID',
      description: 'Batch identifier created automatically',
      type: 'string',
      example: 'ad48e792-7d6e-464f-a478-df3239475016',
      readOnly: true,
    },
    name: {
      title: 'Batch Name',
      description: 'Batch identification name',
      type: 'string',
      example: 'My batch name',
    },
    channel: {
      title: 'Channel',
      description: 'Message channel',
      type: 'string',
    },
  },
  required: [
    'name',
    'channel',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
