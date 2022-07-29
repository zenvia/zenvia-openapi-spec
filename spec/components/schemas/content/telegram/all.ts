import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as fileRef } from '../file';
import { ref as cardRef } from '../card';
import { ref as quickReplyRef} from '../replyable-text';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  title: 'Telegram',
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: fileRef,
  }, {
    $ref: cardRef,
  }, {
    $ref: quickReplyRef,
  }
],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      card: cardRef,
      replyable_text: quickReplyRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
