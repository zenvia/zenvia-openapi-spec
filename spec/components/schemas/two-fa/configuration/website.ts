import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../../utils/ref";

const website: SchemaObject = {
    title: 'Website domains',
    type: 'object',
    properties: {
        domains: {
            type: 'array',
            items: {
                type: 'string',
                example: ['app.zenvia.com'],
            },
        },
        appPackages: {
            type: 'array',
            items: {
                type: 'string',
            },
            example: ['com.zenvia.android.app'],
        },
        websiteKey: {
            type: 'string',
        },
    },
};

export const ref = createComponentRef(__filename);
export default website;