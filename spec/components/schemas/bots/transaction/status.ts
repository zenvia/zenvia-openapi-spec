// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Bot Transaction Status Object',
  description: 'This is a Bot Transaction Status object model.',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'The bulk identifier.',
      example: '853c2b58-8367-4fcb-8d16-d42208e15942',
    },
    transactionId: {
      type: 'string',
      description: 'The transaction identifier.',
      example: '853c2b58-8367-4fcb-8d16-d42208e15942',
    },
    flowId: {
      type: 'string',
      description: 'The workflow identifier.',
      example: 'c2c3e42d-6fb7-4ad6-897a-dd7613469f58',
    },
    campaignId: {
      type: 'string',
      description: 'The campaign identifier.',
      example: 'Campanha de oferta',
    },
    batchName: {
      type: 'string',
      description: 'The batch name.',
      example: 'Nome do batch',
    },
    fileId: {
      type: 'string',
      description: 'The file id.',
      example: '61097903e3cba42959d0a472',
    },
    fileName: {
      type: 'string',
      description: 'The file name.',
      example: 'arquivo.csv',
    },
    status: {
      description: 'The transaction status',
      type: 'string',
      enum: [
        'LOADING',
        'READY',
        'QUEUED',
        'PROCESSING',
        'WORKFLOW',
        'COMPLETED',
        'CANCELING',
        'CANCELED',
        'TIMEOUT',
        'ERROR',
      ],
      example: 'READY',
    },
    errorCode: {
      description: 'The transaction error',
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
    finalState: {
      description: 'The transaction session is finallized',
      type: 'boolean',
      example: 'true',
    },
    senderId: {
      description: 'The sender id',
      type: 'string',
    },
    contents: {
      description: 'The contents',
      type: 'array',
      items: {
        type: 'object',
      },
    },
    isTest: {
      description: 'If it is a test transaction',
      type: 'boolean',
      example: 'false',
    },
    originatedBySandbox: {
      description: 'If it is originated by sandbox',
      type: 'boolean',
      example: 'false',
    },
    scheduled: {
      description: 'If it is scheduled',
      type: 'boolean',
      example: 'false',
    },
    receivedRegisterCount: {
      description: 'The quantity of recived registers',
      type: 'number',
      example: '1',
    },
    successProcessedRecords: {
      description: 'The quantity of records processed with success',
      type: 'number',
      example: '1',
    },
    timedoutRecords: {
      description: 'The quantity of records in timed out',
      type: 'number',
      example: '1',
    },
    errorProcessedRecords: {
      description: 'The quantity of records processed with error',
      type: 'number',
      example: '1',
    },
    canceledRecords: {
      description: 'The quantity of records canceled',
      type: 'number',
      example: '1',
    },
    processingRecords: {
      description: 'The quantity of records in processing',
      type: 'number',
      example: '1',
    },
    workflowWaitingRecords: {
      description: 'The quantity of records in waiting workflow',
      type: 'number',
      example: '1',
    },
    queuedRecords: {
      description: 'The quantity of records in queue',
      type: 'number',
      example: '1',
    },
    progress: {
      description: 'Progress of bulk. 0-100',
      type: 'number',
      example: '100',
    },
    scheduleStart: {
      type: 'string',
      description: 'The schedule start date.',
      example: '2021-08-03T16:26:23.616Z',
    },
    scheduleEnd: {
      type: 'string',
      description: 'The schedule end date.',
      example: '2021-08-03T16:26:23.616Z',
    },
    scheduleLimit: {
      type: 'string',
      description: 'The schedule limit date.',
      example: '2021-08-03T16:26:23.616Z',
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
        'SMS',
        'WHATSAPP',
        'RCS',
        'FACEBOOK',
      ],
      example: 'SMS',
    },
    fallback: {
      type: 'object',
      description: 'The fallbak message',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
