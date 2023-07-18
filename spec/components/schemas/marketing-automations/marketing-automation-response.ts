import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const marketingAutomationResponse: SchemaObject = {
  title: 'Marketing Automation Response Object',
  description: 'Response from an marketing automation run',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'The dispatch identifier',
      example: '7388c68e-675e-435b-b2ec-f72677798678',
    },
    status: {
      type: 'string',
      description: 'The dispatch status',
      example: 'SENT',
    },
    marketingAutomationId: {
      type: 'string',
      description: 'The marketing automation identifier',
      example: '5c408dd6-a39a-4eb1-b3b0-bf6f2f34ea39',
    },
  },
};

export const ref = createComponentRef(__filename);
export default marketingAutomationResponse;
