import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Creation Batch Response',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      example: 'dc514337-14c4-4f53-947b-93088b450e2e',
    },
    organizationId: {
      type: 'string',
      format: 'uuid',
      example: 'a49c0383-5761-4627-bfaa-6019b7e7fe53',
    },
    fileName: { type: 'string', example: 'Contatos Lote 1' },
    size: { type: 'string', example: '24 Mb' },
    status: { type: 'string', example: 'SUCCESS' },
    createAt: {
      type: 'string',
      format: 'date-time',
      example: '2025-04-23T18:42:50.325Z',
    },
  },
};

export const ref: string = createComponentRef(__filename);

export default base;
