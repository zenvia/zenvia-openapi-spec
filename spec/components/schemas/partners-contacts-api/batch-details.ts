import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Complete Batch',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      example: '2565909b-ccd5-4da1-b781-7000718ec65d',
    },
    organizationId: {
      type: 'string',
      format: 'uuid',
      example: 'a49c0383-57b1-4627-bfaa-6019b7e7fe53',
    },
    fileName: { type: 'string', example: 'Contato Lote 1' },
    fileExpireTime: {
      type: 'string',
      format: 'date-time',
      example: '2025-07-24T12:11:24.017Z',
    },
    size: { type: 'string', example: '1 Mb' },
    lines: { type: 'integer', example: 100 },
    status: {
      type: 'string',
      enum: ['SUCCESS', 'PENDING', 'PROCESSING', 'FAILED'],
      example: 'SUCCESS',
    },
    consolidatedStatus: {
      type: 'object',
      properties: {
        extractedRecords: { type: 'integer', example: 100 },
        mappedRecords: { type: 'integer', example: 100 },
        successProcessedRecords: { type: 'integer', example: 88 },
        errorProcessedRecords: { type: 'integer', example: 12 },
      },
     },
    createdAt: {
      type: 'string',
      format: 'date-time',
      example: '2025-03-18T14:23:03.814Z',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      example: '2025-03-18T14:23:03.814Z',
    },
  },
};

export const ref: string = createComponentRef(__filename);

export default base;
