// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const chatbotSucessfulOutboundJsonRef: SchemaObject = {
    type: 'object',
    properties: {
        id: {
            type: 'number',
            description: 'Outbound message identifier in NLU',
            example: 1293,
        },
        channelId: {
            type: 'number',
            description: 'Channel identifier in NLU',
            example: 2,
        },
        contactId: {
            type: 'number',
            description: 'Contact identifier in NLU',
            example: 9752,
        },
        status: {
            type: 'string',
            description: 'Status of outbound trigger',
            example: 'pending',
        },
        createdAt: {
            title: 'Creation Timestamp',
            description: 'Timestamp of the outbound message trigger',
            type: 'string',
            example: '2022-10-27T13:25:11.354Z',
        },
    },
};

export const ref = createComponentRef(__filename);
export default chatbotSucessfulOutboundJsonRef;
