import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as channelRef } from '../message/channel';
import { ref as baseRef } from './base';

const subscription: SchemaObject = {
    type: 'object',
    allOf: [
        {
          $ref: baseRef,
        },
        {
            type: 'object',
            properties: {
                criteria: {
                    type: 'object',
                    properties: {
                        channel: {
                            $ref: channelRef,
                        },
                        direction: {
                            title: 'Message direction',
                            description: 'Indicates whether the message is received from a channel (IN), sent to a channel (OUT) and sent to a channel to INTERNAL',
                            type: 'string',
                            enum: [
                                'IN',
                                'OUT',
                                'INTERNAL',
                            ],
                        },
                    },
                    required: ['channel'],
                },
            },
        },
    ],
};

export const ref = createComponentRef(__filename);
export default subscription;
