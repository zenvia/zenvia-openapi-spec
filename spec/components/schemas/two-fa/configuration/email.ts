import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const email: SchemaObject = {
    title: 'E-mail config',
    type: 'object',
    properties: {
        from: {
            description: 'email sender id',
            type: 'string',
        },
        type: {
            default: 'email',
        },
        subject: {
            type: 'string',
            description: 'email subject',

        },
        html: {
            type: 'string',
            default: 'Olá {{name}}! Seu código de verificação é {{code}}',
        }
    }
}

export const ref = createComponentRef(__filename);
export default email;