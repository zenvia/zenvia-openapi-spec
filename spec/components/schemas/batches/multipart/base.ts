// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from '../base';
import { ref as messageRef } from './message';

const base: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model.',
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      columnMapper: {
        title: 'Column Mapper',
        type: 'object',
        description: 'The mapping of variables in relation to the columns of the file. This indicates in which column of the file is the value that must be used to fill each variable. The **recipient_header_name** variable is required because the column of the file that has the recipient`s contact number must be related to this variable.',
        example: {
          recipient_header_name: 'recipient_number_column',
          name: 'recipient_name_column',
          protocol: 'protocol_column',
        },
      },
      message: {
        $ref: messageRef,
      },
    },
    required: [
      'message',
      'columnMapper',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default base;
