import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const representative: SchemaObject = {
  title: 'Representative Object',
  description: `It provides information about the representative who sent the message.
                <br>It is mainly meant to be used when a **human agent** is the message's sender.
                <br><br>*Only applicable to [Instagram](#tag/Instagram) and [Google Business Messages](#tag/Google-Business-Messages) channels.*`,
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: `Indicates whether the message sender is a *bot* or a *human agent*.
                    <br>The \`HUMAN\` value must only be used on a **human agent** message.`,
      type: 'string',
      enum: ['BOT', 'HUMAN'],
      default: 'BOT',
    },
    name: {
      title: 'Name',
      description: `Representative's name shown on the message.
                    <br>*Only applicable to [Google Business Messages channel](#tag/Google-Business-Messages).*`,
      type: 'string',
    },
    picture: {
      title: 'Picture',
      description: `URL for the avatar picture of the representative message.
                    <br>*Only applicable to [Google Business Messages channel](#tag/Google-Business-Messages).*`,
      type: 'string',
    },

  },
};

export const ref = createComponentRef(__filename);
export default representative;
