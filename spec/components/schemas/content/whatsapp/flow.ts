import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const productList: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'flow',
      },
      header: {
        type: 'string',
        description: 'Header content',
        example: 'Text header content',
      },
      body: {
        type: 'string',
        description: 'Body content',
        example: 'Text body content',
      },
      footer: {
        type: 'string',
        description: 'Footer content',
        example: 'Text footer content',
      },
      flow: {
        type: 'object',
        description: 'The available fields to be used in a flow. Only applicable to [WhatsApp](#tag/WhatsApp) channel.',
        properties: {
            mode: {
                type: 'string',
                description: 'Can be either draft or published',
                example: 'draft',
            },
            token: {
                type: 'string',
                description: 'Flow token',
                example: 'TOKEN_FLOW',
            },
            id: {
                type: 'string',
                description: 'Flow id',
                example: 'TOKEN_ID',
            },
            buttonText: {
                type: 'string',
                descrpition: 'Text for the button',
                example: 'Click here!',
            },
            action: {
                type: 'object',
                description: 'Details about the action of the Flow',
                properties: {
                    type: {
                        type: 'string',
                        description: 'Can be either "navigate" or "data_exchange"',
                        example: 'navigate',
                    },
                    screen: {
                        type: 'string',
                        description: 'Identification for the screen ID',
                        example: 'SCREEN_ID',
                    },
                    data: {
                        title: 'Custom Data',
                        description: 'Set values for custom data fields created.',
                        type: 'object',
                        additionalProperties: {
                            title: 'Value',
                            description: 'Sets a value to a custom data field (the property name).',
                            oneOf: [{
                            type: 'string',
                            title: 'String',
                            example: '2022234324',
                            }, {
                            type: 'number',
                            title: 'Number',
                            example: 10,
                            }, {
                            type: 'boolean',
                            title: 'Boolean',
                            example: true,
                            }],
                        },
                    },
                },
            },
        },
      },
    },
    required: [
      'type',
      'catalogId',
      'body',
      'sections',
      'flow',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default productList;
