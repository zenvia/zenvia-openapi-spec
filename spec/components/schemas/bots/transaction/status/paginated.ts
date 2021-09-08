// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as botsTrasactionStatusRef } from '../status';

const base: SchemaObject = {
  title: 'Paginated list of Bulk Transaction Status Object',
  description: 'This is a Paginated list of Bulk Transaction Status object model.',
  type: 'object',
  properties: {
    content: {
      type: 'array',
      items: {
        $ref: botsTrasactionStatusRef,
      },
    },
    pageable: {
      type: 'object',
      properties: {
        sort: {
          type: 'object',
          properties: {
            sorted: {
              description: 'If it is sorted',
              type: 'boolean',
              example: false,
            },
            unsorted: {
              description: 'If it is unsorted',
              type: 'boolean',
              example: true,
            },
            empty: {
              description: 'If it is empty',
              type: 'boolean',
              example: true,
            },
          },
        },
        pageSize: {
          description: 'Page size',
          type: 'number',
          example: 20,
        },
        pageNumber: {
          description: 'Page number',
          type: 'number',
          example: 0,
        },
        offset: {
          description: 'Elements Offset',
          type: 'number',
          example: 0,
        },
        paged: {
          description: 'If it is pagged',
          type: 'boolean',
          example: true,
        },
        unpaged: {
          description: 'If it is unpagged',
          type: 'boolean',
          example: false,
        },
      },
    },
    last: {
      description: 'If it is last page',
      type: 'boolean',
      example: false,
    },
    totalPages: {
      description: 'Total of pages',
      type: 'number',
      example: 142,
    },
    totalElements: {
      description: 'Total of elements',
      type: 'number',
      example: 2840,
    },
    first: {
      description: 'If it is first page',
      type: 'boolean',
      example: true,
    },
    sort: {
      type: 'object',
      properties: {
        sorted: {
          description: 'If it is sorted',
          type: 'boolean',
          example: false,
        },
        unsorted: {
          description: 'If it is unsorted',
          type: 'boolean',
          example: true,
        },
        empty: {
          description: 'If it is empty',
          type: 'boolean',
          example: true,
        },
      },
    },
    size: {
      description: 'Page size',
      type: 'number',
      example: 20,
    },
    number: {
      description: 'Page number',
      type: 'number',
      example: 0,
    },
    numberOfElements: {
      description: 'Page size',
      type: 'number',
      example: 20,
    },
    empty: {
      description: 'If it is empty',
      type: 'boolean',
      example: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
