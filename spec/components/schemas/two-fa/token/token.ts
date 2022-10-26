import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const token: SchemaObject = {
    type: 'object',
    properties: {
        configurationId: {
            type: 'string',
            description: 'Unique configuration Id',
            format: 'UUID',
            example: '0f25c816-478d-4729-a600-b6b0124b4b9e',
        },
        to: {
            description: 'Contact number or e-mail to send the code',
            type: 'string',
            example: '5511999999999',
        },
        channel: {
            description: 'Channel to be used to send the token',
            type: 'string',
            enum: ['sms', 'email'],
            example: 'sms',

        },
        locale: {
            description: 'Locale of the user previously configured',
            type: 'string',
            example: 'pt_br',
        },
        fields: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    description: 'Name of the user to receive the token',
                    example: 'Maria Smith',
                }
            }
        },
    },
};

export const ref = createComponentRef(__filename);
export default token;