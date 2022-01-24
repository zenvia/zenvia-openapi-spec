import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const aggregatedStatus: SchemaObject = {
  title: 'Aggregated batch status',
  description: 'Detailed status of the batch items',
  type: 'object',
  properties: {
    successProcessedRecords: {
      description: 'The quantity of records processed with success',
      type: 'number',
      example: 1,
    },
    timedoutRecords: {
      description: 'The quantity of records in timed out',
      type: 'number',
      example: 1,
    },
    errorProcessedRecords: {
      description: 'The quantity of records processed with error',
      type: 'number',
      example: 1,
    },
    canceledRecords: {
      description: 'The quantity of records canceled',
      type: 'number',
      example: 1,
    },
    processingRecords: {
      description: 'The quantity of records in processing',
      type: 'number',
      example: 1,
    },
    queuedRecords: {
      description: 'The quantity of records in queue',
      type: 'number',
      example: 1,
    },
  },
};

export const ref = createComponentRef(__filename);
export default aggregatedStatus;
