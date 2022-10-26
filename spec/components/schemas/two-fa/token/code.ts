import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const code: SchemaObject = {
    title: 'code',
    type: 'object',
    description: 'Code sended by the user',
    properties: {
        code: {
            type: 'string',
            description: 'code sended by the user',
            example: '269878',
        }, 
    }       
};

export const ref = createComponentRef(__filename);
export default code;