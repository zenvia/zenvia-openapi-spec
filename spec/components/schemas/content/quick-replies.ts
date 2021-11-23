import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from './text';
import { createComponentRef } from '../../../../utils/ref';
import { ref as quickReplyRef } from './bases/quick-reply-list';

const text: SchemaObject = {
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
      quickReplyButtons: {
        $ref: quickReplyRef,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default text;
