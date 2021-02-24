import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as allContentsRef } from '../content/whatsapp/all';
import { createComponentRef } from '../../../../utils/ref';
import { ref as visitorSchemaRef } from './visitor';

const all: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      visitor: {
        $ref: visitorSchemaRef,
      },
      contents: {
        title: 'Message Contents',
        description: 'A list of content to be sent',
        type: 'array',
        items: {
          $ref: allContentsRef,
        },
        minItems: 1,
      },
      idRef: {
        description: 'When an user sends a message quoting a previous message, the identifier of the quoted message will be provided here.<br>*Only applicable to [WhatsApp channel](#tag/WhatsApp).*',
        type: 'string',
        readOnly: true,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
