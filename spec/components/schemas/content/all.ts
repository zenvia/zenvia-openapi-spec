import { SchemaObject } from 'openapi3-ts';
import { ref as allWhatsContentsRef } from '../content/whatsapp/all';
import { ref as allInstaContentsRef } from '../content/instagram/all';
import { ref as allSmsContentsRef } from '../content/sms/all';
import { ref as allFaceContentsRef } from '../content/facebook/all';
import { ref as allRcsContentsRef } from '../content/rcs/all';
import { ref as allVoiceContentsRef } from '../content/voice/all';
import { ref as allTelegramContentsRef } from '../content/telegram/all';
import { ref as allGbmContentsRef } from '../content/gbm/all';
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
  }],
};

export const ref = createComponentRef(__filename);
export default all;
