import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const verification: SchemaObject = {
    type: 'object',
    properties: {
        to: {
            type: 'string',
            description: 'user',
            example: 'email@email.com',
        },
        channel: {
            type: 'string',
            description: 'channel used',
            example: 'email',
        },
        code: {
            type: 'string',
            description: 'code sended by the user',
            example: '269878',
        }, 
    },    
};

export const ref = createComponentRef(__filename);
export default verification;