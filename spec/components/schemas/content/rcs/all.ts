import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as cardRef } from '../card';
import { ref as carouselRef } from '../carousel';
import { ref as fileRef } from '../file';
import { ref as quickRepliesRef } from '../replyable-text';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as templateRef } from '../template';

const all: SchemaObject = {
  title: 'RCS',
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
  }, {
    $ref: templateRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      template: templateRef,
      file: fileRef,
      card: cardRef,
      carousel: carouselRef,
      replyable_text: quickRepliesRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
