import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as automationIdRef } from '../../components/parameters/automationId';
import { ref as automationDispatcherSchema } from '../../components/schemas/automation-dispatcher/automation-dispatcher';
import { ref as automationDispatcherResponseSchema } from '../../components/schemas/automation-dispatcher/automation-dispatcher-response';

const post: OperationObject = {
  summary: 'Trigger an automation',
  description: 'Allows the execution of an automation',
  tags: ['Automation Dispatcher'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: automationDispatcherSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Automation successfully executed',
      content: {
        'application/json': {
          schema: {
            $ref: automationDispatcherResponseSchema,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};


const path: PathItemObject = {
  post,
  parameters: [{
    $ref: automationIdRef
  }]
};

export default path;
