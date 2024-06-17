// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const chatbotSucessfulOutboundJsonRef: SchemaObject = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            description: 'Status of sent outbound',
            example: 'pending',
        },
        externalId: {
            type: 'string',
            description: 'UUID identifier of outbound processing',
            example: '828d8b1f-9df3-4b94-a0c7-5a74803cc25e',
        },
        messageId: {
            type: 'number',
            description: 'Message identifier in NLU',
            example: 1293,
        },
        contactId: {
            type: 'number',
            description: 'Contact identifier in NLU',
            example: 9752,
        },
    },
};

export const ref = createComponentRef(__filename);
export default chatbotSucessfulOutboundJsonRef;
