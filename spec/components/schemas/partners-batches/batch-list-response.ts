import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  type: 'object',
  description: 'Represents a batch of contacts for processing.',
  properties: {
    id: {
      type: 'string',
      description: 'The unique identifier for the batch.',
      example: 'c4a4e9a1-2c9c-4d3a-8f7b-9b4e2e0d1f3e',
    },
    organizationId: {
      type: 'string',
      description: 'The ID of the organization the batch belongs to.',
      example: 'a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6',
    },
    fileName: {
      type: 'string',
      description: 'The original name of the uploaded file.',
      example: 'contacts_q3_2025.csv',
    },
    fileUrl: {
      type: 'string',
      format: 'url',
      description: 'The uploaded file\'s url.',
      example: 'https://chat-hlg.zenvia.com/storage/folders/a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6/files/c4a4e9a1-2c9c-4d3a-8f7b-9b4e2e0d1f3e.bin',
    },
    fileExpireTime: {
      type: 'string',
      format: 'date-time',
      description: 'The expiration date and time for file access. (Default of 10 days.)',
      example: '2025-08-06T23:59:59.000Z',
    },
    feedbackUrl: {
      type: 'string',
      format: 'url',
      description: 'The uploaded file\'s feedback url.',
      example: 'https://chat-hlg.zenvia.com/storage/folders/a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6/files/4094d16af43dea0fcba63bcb217b60b07cb9e46dfa1f22b1f965ea2b433871ea.bin',
    },
    size: {
      type: 'string',
      description: 'The size of the file (e.g., "15 Mb").',
      example: '2.5 Mb',
    },
    lines: {
      type: 'number',
      description: 'The number of lines or records in the file.',
      example: 1000,
    },
    status: {
      type: 'string',
      description: 'The current processing status of the batch.',
      enum: ['SUCCESS', 'PENDING', 'FAILED'],
      example: 'SUCCESS',
    },
    consolidatedStatus: {
      type: 'object',
      description: 'Describes the consolidated status of the batch processing. (Only showed when `status` is `SUCCESS` or `FAILED`.)',
      properties: {
        extractedRecords: {
          type: 'number',
          description:
            'The number of records extracted from the original file.',
          example: 1000,
        },
        mappedRecords: {
          type: 'number',
          description:
            'The number of records successfully mapped to the expected format.',
          example: 1000,
        },
        successProcessedRecords: {
          type: 'number',
          description:
            'The number of records that were successfully processed and saved.',
          example: 990,
        },
        errorProcessedRecords: {
          type: 'number',
          description: 'The number of records that failed during processing.',
          example: 10,
        },
      },
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'The creation date and time of the batch.',
      example: '2025-07-30T19:55:42.321Z',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'The date and time of the last update to the batch.',
      example: '2025-07-30T19:56:10.123Z',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
