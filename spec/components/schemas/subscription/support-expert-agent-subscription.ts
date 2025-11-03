import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseRef } from './base';

const supportExpertAgentEvent: SchemaObject = {
    type: 'object',
    allOf: [{
        $ref: baseRef,
      },
    ],
};

export const ref = createComponentRef(__filename);
export default supportExpertAgentEvent;
