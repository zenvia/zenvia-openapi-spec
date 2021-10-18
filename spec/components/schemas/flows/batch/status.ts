// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as items } from './items';
import { ref as schedule } from './schedule';

const base: SchemaObject = {
  title: 'Flow Batch Status Object',
  description: 'This is a Flow Batch Status object model.',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'The flow batch identifier.',
      example: '853c2b58-8367-4fcb-8d16-d42208e15942',
    },
    flowId: {
      type: 'string',
      description: 'The workflow identifier.',
      example: 'c2c3e42d-6fb7-4ad6-897a-dd7613469f58',
    },
    campaignName: {
      type: 'string',
      description: 'The campaign name.',
      example: 'Campanha de oferta',
    },
    fileName: {
      type: 'string',
      description: 'The file name.',
      example: 'arquivo.csv',
    },
    status: {
      description: 'The batch status: \
        \n `LOADING`:  Loading the batch \
        \n `READY`: Batch loaded and ready to be dispatched \
        \n `QUEUED`: Batch sent to dispatch queue \
        \n `PROCESSING`: Batch dispatch in progress \
        \n `WAITING`: Waiting confirmation of the batch status \
        \n `COMPLETED`: Batch completed \
        \n `CANCELING`: Batch being canceled \
        \n `CANCELED`: Batch canceled \
        \n `TIMEOUT`: Timeout to process the batch \
        \n `ERROR`: Error to proceed with the batch',
      type: 'string',
      example: 'READY',
    },
    errorCode: {
      description: 'The batch error',
      type: 'string',
      enum: [
        'ERROR_SAVING_FILE',
        'ERROR_INVALID_MEDIA_TYPE',
        'ERROR_IN_MEDIA_TYPE_DETECTION',
        'ERROR_FILE_NOT_FOUND',
        'ERROR_IN_FILE_PROCESSING',
        'ERROR_PROCESSING_CONTACTS',
        'ERROR_INVALID_BULK_HEADERS',
        'ERROR_INVALID_CHARACTER',
        'ERROR_INVALID_TELEPHONE_NUMBER',
        'ERROR_SEEKING_CONTACTS',
        'ERROR_MAX_TPS',
        'UNSUPPORTED_CONTENT',
        'HEADER_SIZE_MISMATCH',
        'INVALID_MESSAGE_FORMAT',
        'WORKFLOW_ID_NOT_FOUND',
        'GATEWAY_ERROR',
        'WORKFLOW_ERROR',
        'INVALID_CONTENTS',
        'RECIPIENT_NOT_FOUND',
        'ERROR_REQUEST_STANDARD_ANSWER',
        'RESCHEDULE_PROCESS_ERROR',
      ],
      example: 'WORKFLOW_ID_NOT_FOUND',
    },
    size: {
      description: 'The quantity of recived registers',
      type: 'number',
      example: 1,
    },
    items: {
      type: 'object',
      $ref: items,
    },
    progress: {
      description: 'Progress of batch. 0-100',
      type: 'number',
      example: 100,
    },
    schedule: {
      type: 'object',
      $ref: schedule,
    },
    createdDate: {
      type: 'string',
      description: 'The created date.',
      example: '2021-08-03T16:26:23.616Z',
    },
    createdByUserEmail: {
      type: 'string',
      description: 'The creator e-mail',
      example: 'user@mail.com',
    },
    channel: {
      type: 'string',
      description: 'The Channel',
      enum: [
        'sms',
        'whatsapp',
        'rcs',
        'facebook',
      ],
      example: 'sms',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
