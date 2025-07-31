import {
  OperationObject,
  PathItemObject,
  ResponseObject,
  ResponsesObject,
  SchemaObject,
} from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  summary: 'Retrieve batch items by id',
  description: 'Retrieve a contact batch items by its id as a CSV file.',
  tags: ['Contact Batches'],
  responses: {
    200: {
      description: 'Batch items retrieved successfully in CSV format.',
      content: {
        'text/csv': {
          schema: {
            type: 'string',
            format: 'binary',
            description:
              'A CSV file with contacts data, using semicolons as delimiters.',
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
