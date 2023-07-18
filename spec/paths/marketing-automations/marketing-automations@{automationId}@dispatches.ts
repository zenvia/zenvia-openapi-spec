import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as automationIdRef } from '../../components/parameters/automationId';
import { ref as marketingAutomationSchema } from '../../components/schemas/marketing-automations/marketing-automation';
import { ref as marketingAutomationResponseSchema } from '../../components/schemas/marketing-automations/marketing-automation-response';

const post: OperationObject = {
  summary: 'Dispatch a marketing automation',
  description: 'Allows the execution of a marketing automation',
  tags: ['Marketing Automations'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: marketingAutomationSchema,
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
            $ref: marketingAutomationResponseSchema,
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
    $ref: automationIdRef,
  }],
};

export default path;
