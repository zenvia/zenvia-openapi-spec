import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const delivery: SchemaObject = {
    title: 'Delivery properties',
    type: 'object',
    description: 'Has the delivery properties',
    properties: {
        maxAttempts: {
            type: 'number',
            description: 'Max attempts to deliver a token',
            default: 1,
            minimum: 1,
            maximum: 5,
        },
        minIntervalSeconds: {
            type: 'number',
            default: 60,
            minimum: 60,
            maximum: 120,
        }
    }
};

export const ref = createComponentRef(__filename);
export default delivery;