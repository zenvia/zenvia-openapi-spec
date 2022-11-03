import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as fileRef } from '../file';
import { ref as quickRepliesRef } from '../replyable-text';
import { ref as cardRef } from '../card';
import { ref as carouselRef } from '../carousel';
import { ref as optinRequestRef } from '../optin_request';
import { createComponentRef } from '../../../../../utils/ref';

const mtContent: SchemaObject = {
  title: 'Instagram',
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: fileRef,
  }, {
    $ref: quickRepliesRef,
  }, {
    $ref: cardRef,
  }, {
    $ref: carouselRef,
  }, {
    $ref: optinRequestRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      replyable_text: quickRepliesRef,
      card: cardRef,
      carousel: carouselRef,
      optin_request: optinRequestRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default mtContent;
