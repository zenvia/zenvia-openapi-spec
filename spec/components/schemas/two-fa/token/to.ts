import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const recipient: SchemaObject = {
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
    },    
};

export const ref = createComponentRef(__filename);
export default recipient;