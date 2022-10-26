import { SchemaObject } from "openapi3-ts";
import { ref as tokenref } from './token';
import { ref as verifyref } from './verify';
import { ref as deliveryref } from './delivery';
import { ref as contentref } from './content';
import { ref as websiteref } from './website';
import { createComponentRef } from "../../../../../utils/ref";

const tokenConfig: SchemaObject = {
    title: 'Token configuration object',
    description: 'This a token configuration object model',
    type: 'object',
    properties: {
        token: {
            title: 'Token Properties',
            description: 'Holds the token properties like size, mode and case',
            type: 'object',
            $ref: tokenref
        },
        verify: {
            title: 'Verification properties',
            description: 'Holds the maxAttempts of trying to check the token and the expire time',
            type: 'object',
            $ref: verifyref,
        },
        delivery: {
            title: 'Delivery properties',
            description: 'Holds the maxAttempts and the time to send the user response',
            type: 'object',
            $ref: deliveryref,
        },
        content: {
            title: 'Message contents',
            description: 'It has the language and sender information',
            type: 'string',
            $ref: contentref,                
        },
        website: {
            title: 'Domains',
            description: 'Has the used domains',
            type: 'string',
            $ref: websiteref,
        },
    },
}

export const ref = createComponentRef(__filename);
export default tokenConfig;