import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as cardRef } from '../card';
import { ref as carouselRef } from '../carousel';
import { ref as fileRef } from '../file';
import { ref as quickRepliesRef } from '../quick-replies';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: fileRef,
  }, {
    $ref: cardRef,
  }, {
    $ref: carouselRef,
  }, {
    $ref: quickRepliesRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      card: cardRef,
      carousel: carouselRef,
      text_replies: quickRepliesRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
