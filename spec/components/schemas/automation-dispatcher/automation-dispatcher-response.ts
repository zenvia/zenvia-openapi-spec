import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const automationDispatcherResponse: SchemaObject = {
  title: 'Automation Dispatcher Response Object',
  description: 'Response from an automation run',
  type: 'object',
  properties: {
    code: {
      type: 'string',
      description: 'Response status code',
      example: 'OK',
    },
    message: {
      type: 'string',
      description: 'Response message',
      example: 'Automation executed successfully',
    },
  },
};

export const ref = createComponentRef(__filename);
export default automationDispatcherResponse;
