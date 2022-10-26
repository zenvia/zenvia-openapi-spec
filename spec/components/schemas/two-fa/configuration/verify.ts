import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const verify: SchemaObject = {
    title: 'Verification properties',
    type: 'object',
    description: 'The verification properties',
    properties: {
        maxAttempts: {
            type: 'number',
            description: 'Number of attempts to try to verify a code',
            default: 3,
            minimum: 3,
        },
        expireMinutes: {
            type: 'number',
            description: 'Time to expire token in minutes',
            default: 1,
            minimum: 1,
            maximum: 10,
        }
    }
};

export const ref = createComponentRef(__filename);
export default verify;