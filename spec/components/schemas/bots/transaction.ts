// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Bot Transaction Object',
  description: 'TransactionId of Bot dispatch',
  type: 'object',
  properties: {
    id: {
      title: 'Transaction ID',
      description: 'Bot Transaction identifier',
      type: 'string',
      example: 'c2c3e42d-6fb7-4ad6-897a-dd7613469f58',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
