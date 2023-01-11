import { SchemaObject } from 'openapi3-ts';
import { ref as allWhatsContentsRef } from './whatsapp/all';
import { ref as allInstaContentsRef } from './instagram/all';
import { ref as allSmsContentsRef } from './sms/all';
import { ref as allFaceContentsRef } from './facebook/all';
import { ref as allRcsContentsRef } from './rcs/all';
import { ref as allVoiceContentsRef } from './voice/all';
import { ref as allTelegramContentsRef } from './telegram/all';
import { ref as allGbmContentsRef } from './gbm/all';
import { ref as allEmailContentsRef } from './email/all';
import { createComponentRef } from '../../../../utils/ref';

const all: SchemaObject = {
  anyOf: [{
    $ref: allWhatsContentsRef,
  }, {
    $ref: allInstaContentsRef,
  }, {
    $ref: allSmsContentsRef,
  }, {
    $ref: allFaceContentsRef,
  }, {
    $ref: allRcsContentsRef,
  }, {
    $ref: allVoiceContentsRef,
  }, {
    $ref: allTelegramContentsRef,
  }, {
    $ref: allGbmContentsRef,
  }, {
    $ref: allEmailContentsRef,
  }],
};

export const ref = createComponentRef(__filename);
export default all;
