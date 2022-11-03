import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as fileRef } from '../file';
import { ref as quickRepliesRef } from '../replyable-text';
import { ref as cardRef } from '../card';
import { ref as carouselRef } from '../carousel';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as optinRequestRef } from '../optin_request';

const all: SchemaObject = {
  title: 'Facebook',
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
    $ref: optinRequestRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      card: cardRef,
      carousel: carouselRef,
      replyable_text: quickRepliesRef,
      optin_request: optinRequestRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
