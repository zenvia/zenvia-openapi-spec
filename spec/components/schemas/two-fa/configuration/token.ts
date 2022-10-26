import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const token: SchemaObject = {
    title: 'Token properties',
    description: 'Information about the token',
    type: 'object',
    properties: {
        size: {
            type: 'number',
            description: 'Size of the code to be send to the user',
            example: '6',
            maximum: 12,
            minimum: 6,
            default: 6,            
        },
        mode: {
            title: 'Code mode',
            type: 'string',
            description: 'Indicates the type of the code to be sent.',
            enum: ['NUMBER', 'ALPHANUMERIC', 'ALPHANUMERIC_SUBSET'],
            default: 'NUMBER',
            example: 'NUMBER',
        },
        case: {
            title: 'Case type',
            description: 'Type of the code case',
            type: 'string',
            enum: ['UPPER_ONLY', 'LOWER_ONLY', 'MIXED'],
            default: 'UPPER_ONLY',
            example: 'UPPER_ONLY'
        },
    },
};

export const ref = createComponentRef(__filename);
export default token;