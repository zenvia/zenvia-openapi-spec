import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const file: SchemaObject = {
  title: 'CSV file properties',
  description: 'Informations about the CSV file',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'The file name.',
      example: 'file.csv',
      readOnly: true,
    },
    containsHeader: {
      description: 'Set true if the file contains the fields names in the header or false if not',
      type: 'boolean',
      example: true,
    },
    charset: {
      description: 'File headers (CSV)',
      type: 'string',
      example: 'UTF-8',
      readOnly: true,
    },
  },
  required: [
    'containsHeader',
  ],
};

export const ref = createComponentRef(__filename);
export default file;
