import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseEvent } from './base';

const supportExpertAgentEvent: SchemaObject = {
    type: 'object',
    allOf: [
        { $ref: baseEvent },
    ],
};

export const ref = createComponentRef(__filename);
export default supportExpertAgentEvent;
