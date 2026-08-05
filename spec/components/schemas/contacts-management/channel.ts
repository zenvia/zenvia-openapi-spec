// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as whatsappRef } from './channel/whatsapp';
import { ref as phoneRef } from './channel/phone';
import { ref as emailRef } from './channel/email';
import { ref as facebookRef } from './channel/facebook';
import { ref as instagramRef } from './channel/instagram';
import { ref as twitterRef } from './channel/twitter';
import { ref as meliRef } from './channel/meli';
import { createComponentRef } from '../../../../utils/ref';

const channel: SchemaObject = {
  title: 'Channel',
  description: 'A single normalized contact communication channel. Select a channel type to see its fields. The channelList array accepts multiple entries of any mix of types.',
  oneOf: [
    { $ref: whatsappRef },
    { $ref: phoneRef },
    { $ref: emailRef },
    { $ref: facebookRef },
    { $ref: instagramRef },
    { $ref: twitterRef },
    { $ref: meliRef },
  ],
  discriminator: {
    propertyName: 'type',
    mapping: {
      whatsapp: whatsappRef,
      phone: phoneRef,
      email: emailRef,
      facebook: facebookRef,
      instagram: instagramRef,
      twitter: twitterRef,
      meli: meliRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default channel;
