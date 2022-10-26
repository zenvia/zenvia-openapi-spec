import { SchemaObject } from "openapi3-ts";
import { ref as smsref } from './sms';
import { ref as emailref } from './email';
import { createComponentRef } from "../../../../../utils/ref";

const language: SchemaObject = {
    title: '',
    type: 'object',
    properties: {
        default: {
            type: 'boolean',
            description: 'The default language',
        },
        sms: {
            title: 'SMS config',
            type: 'object',
            $ref: smsref,
        },
        email: {
            title: 'E-mail config',
            type: 'object',
            $ref: emailref,
        },
    },
};

export const ref = createComponentRef(__filename);
export default language;