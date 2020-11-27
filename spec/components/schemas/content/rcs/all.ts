import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as cardRef } from '../card';
import { ref as carouselRef } from '../carousel';
import { ref as fileRef } from '../file';
import { ref as buttonRef } from '../buttons';
import { ref as quickReplyRef } from '../quick-reply';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: fileRef,
  }, {
    $ref: buttonRef,
  }, {
    $ref: quickReplyRef,
  }, {
    $ref: cardRef,
  }, {
    $ref: carouselRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      button: buttonRef,
      quick_reply: quickReplyRef,
      card: cardRef,
      carousel: carouselRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
