// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as flowsBatchStatusRef } from './status';

const base: SchemaObject = {
  title: 'Paginated list of Flow Batch Status Object',
  description: 'This is a Paginated list of Flow Batch Status object model.',
  type: 'object',
  properties: {
    content: {
      type: 'array',
      items: {
        $ref: flowsBatchStatusRef,
      },
    },
    first: {
      description: 'If it is first page',
      type: 'boolean',
      example: true,
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
    pageActualSize: {
      description: 'Number of elements in actual page',
      type: 'number',
      example: 19,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
