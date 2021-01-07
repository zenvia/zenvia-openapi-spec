// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
// import { ref as columnMapperContents } from './content/columnMapperContents';

const base: SchemaObject = {
  title: 'Column Mapper',
  description: 'The mapping of variables in relation to the columns of the file. This indicates in which column of the file is the value that must be used to fill each variable. The **recipient_header_name** variable is required because the column of the file that has the recipient`s contact number must be related to this variable.',
  type: 'object',
  example: {
    "recipient_header_name": "recipient_number_column",
    "name": "recipient_name_column",
    "protocol": "protocol_column"
  },
  properties: {
    recipient_header_name: {
      title: 'Recipient header name',
      description: 'Recipient header name',
      type: 'string',
      example: 'recipient_header_name',
    },
    name: {
      title: 'Recipient name column',
      description: 'Recipient name column',
      type: 'string',
      example: 'recipient_name_column',
    },
    protocol: {
      title: 'Protocol column',
      description: 'Protocol column',
      type: 'string',
      example: 'protocol_column',
    },
  },
    required: [
      'recipient_header_name'
    ],
};

export const ref = createComponentRef(__filename);
export default base;
