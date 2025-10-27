import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const supportExpertAgentEvent: SchemaObject = {
    type: 'object',
    properties: {
        ticket: {
            type: 'object',
            properties: {
                id: {
                    title: 'Ticket identifier',
                    type: 'string',
                    example: '1846867',
                },
            },
        },
        expertAgent: {
            title: 'Details of the expert agent',
            type: 'object',
            properties: {
                id: {
                    title: 'Expert agent identifier',
                    type: 'string',
                    example: '18467',
                },
                externalId: {
                    title: 'Expert agent external identifier',
                    type: 'string',
                    example: '184234236867',
                },
            },
        },
    },
};

export const ref = createComponentRef(__filename);
export default supportExpertAgentEvent;
