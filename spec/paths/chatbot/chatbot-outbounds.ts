import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as chatbotOutboundJsonRef } from '../../components/schemas/chatbot/chatbot-outbound';

const post: OperationObject = {
    description: 'Send outbound message to Chatbot',
    tags: ['Chatbot Outbound'],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: chatbotOutboundJsonRef,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Success response of sent outbound',
            content: {
                'application/json': {
                    schema: {
                        $ref: chatbotOutboundJsonRef,
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
};

export default path;
