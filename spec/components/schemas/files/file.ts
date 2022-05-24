// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as multipartDataRef } from './multipart-data';

const base: SchemaObject = {
  type: 'object',
  allOf: [{
    type: 'object',
    properties: {
      id: {
        title: 'ID',
        description: 'ID of the file resource created.',
        type: 'string',
        example: 'f8b5a77c7cd3403b08231a1a9c40705717cbc8cab4a9a9e08bf8a5c78905b7d5',
        readOnly: true,
      },
      url: {
        title: 'URL',
        description: 'URL from where the file content is available.',
        type: 'string',
        example: 'https://zenvia.chat/storage/files/f8b5a77c7cd3403b08231a1a9c40705717cbc8cab4a9a9e08bf8a5c78905b7d5.bin',
        readOnly: true,
      },
      sourceUrl: {
        title: 'Source URL',
        description: 'URL from where the file content will be obtained.',
        type: 'string',
        example: 'https://zenvia.com/example.mp4',
        writeOnly: true,
      },
      sourceHeaders: {
        title: 'Source Headers',
        description: 'These headers will be sent in the request to `sourceUrl` to get the file content.',
        type: 'object',
        example: {
          Authorization: 'Basic dXNlcjpwd2Q=',
          'X-Custom-Token': 'TOKEN',
        },
        writeOnly: true,
      },
    },
    required: [
      'sourceUrl',
    ],
  }, {
    $ref: multipartDataRef,
  }, {
    type: 'object',
    properties: {
      bytes: {
        title: 'Bytes',
        description: 'Size in bytes of the file content created.',
        type: 'number',
        example: 1044889600,
        readOnly: true,
      },
      createdAt: {
        title: 'Created At',
        description: 'Timestamp of the file creation.',
        type: 'string',
        example: '2021-12-20T14:37:59.000Z',
        readOnly: true,
      },
      deleteAt: {
        title: 'Delete At',
        description: 'Timestamp of the moment after which the file will be automatically deleted.',
        type: 'string',
        format: 'date-time',
        example: '2021-12-21T14:37:59.000Z',
        readOnly: true,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default base;
