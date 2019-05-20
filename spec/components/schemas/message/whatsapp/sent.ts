import { SchemaObject } from "openapi3-ts";
import { ref as baseRef } from '../base';
import { ref as allContentsRef } from '../../content/whatsapp/all';
import { createComponentRef } from "../../../../../utils/ref";

const all: SchemaObject = {
  allOf: [{
    $ref: baseRef,
  },{
    properties: {
      contents: {
        title: 'Message Contents',
        description: 'A list of content to be sent',
        type: 'array',
        items: {
          $ref: allContentsRef,
        },
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
