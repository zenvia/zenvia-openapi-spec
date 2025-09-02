import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  type: 'object',
  description: 'Represents the imported batch.',
  properties: {
    id: {
      type: 'string',
      description: 'The unique identifier for the import record.',
      example: 'dc514337-14c4-4f53-947b-93088b450e2e',
    },
    organizationId: {
      type: 'string',
      description: 'The unique identifier of the organization the import belongs to.',
      example: 'a49c0383-57b1-4627-bfaa-6019b7e7fe53',
    },
    fileName: {
      type: 'string',
      description: 'The name of the imported file.',
      example: 'Contacts - Batch 1',
    },
    fileUrl: {
      type: 'string',
      description: 'The uploaded file\'s url.',
      example: 'https://chat.zenvia.com/storage/folders/a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6/files/c4a4e9a1-2c9c-4d3a-8f7b-9b4e2e0d1f3e.bin',
    },
    size: {
      type: 'string',
      description: 'The size of the file.',
      example: '24 Mb',
    },
    status: {
      type: 'string',
      description: 'The final status of the file processing.',
      enum: ['SUCCESS', 'PENDING', 'FAILED'],
      example: 'SUCCESS',
    },
    createdAt: {
      type: 'string',
      description: 'The date and time the record was created, in ISO 8601 format.',
      example: '2025-04-23T18:42:50.325Z',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
