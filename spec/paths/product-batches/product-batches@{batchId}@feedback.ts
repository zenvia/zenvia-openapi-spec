import {
  OperationObject,
  PathItemObject,
  ResponseObject,
  ResponsesObject,
  SchemaObject,
} from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  summary: 'Retrieve batch feedback by id',
  description: 'Retrieve a product batch feedback by its id as a CSV file.',
  tags: ['Product Batches'],
  responses: {
    200: {
      description: 'Batch feedback retrieved successfully in CSV format.',
      content: {
        'text/csv': {
          schema: {
            type: 'string',
            format: 'binary',
            description: 'A CSV file with products feedback data, using semicolons as delimiters. This CSV will contain two new columns, status (the processing status of each line) and errorMessages (the validation errors for each line).',
          } as SchemaObject,
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  get,
};

export default path;
