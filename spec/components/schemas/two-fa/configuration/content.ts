import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";
import { ref as languageref } from './language';

const content: SchemaObject = {
    title: 'Content',
    type: 'object',
    description: 'Content with SMS and e-mail information',
    properties: {
        pt_br: {
            title: 'SMS and E-mail config',
            $ref: languageref,
        },
    },
}

export const ref = createComponentRef(__filename);
export default content;

