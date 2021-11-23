import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as fileRef } from '../file';
import { ref as quickRepliesRef } from '../quick-replies';
import { ref as cardRef } from '../card';
import { ref as carouselRef } from '../carousel';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: fileRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      text_replies: quickRepliesRef,
      card: cardRef,
      carousel: carouselRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
