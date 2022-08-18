import { SchemaObject } from "openapi3-ts";
import { ref as textRef } from '../text';
import { ref as buttonsRef } from '../bases/buttons-list'
import { createComponentRef } from '../../../../../utils/ref';

const button: SchemaObject = {
    type: 'object',
    allOf: [{
      $ref: textRef,
    }, {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          example: 'replyable_text',
        },
        buttons: {
          $ref: buttonsRef,
        },
      },
    }],
}

export const ref = createComponentRef(__filename);
export default button;