import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const visitor: SchemaObject = {
  title: 'Visitor Object',
  description: `It provides information about the contact who sent the message.
                <br>The availability of this information depends on privacy settings of the contact.
                <br><br>*Only applicable to [WhatsApp](#tag/WhatsApp), [Instagram](#tag/Instagram),
                [Facebook](#tag/Facebook), [Telegram](#tag/Telegram), [Google Business Messages](#tag/Google-Business-Messages)
                and [E-Mail](#tag/E-Mail) channels.*`,
  type: 'object',
  properties: {
    name: {
      title: 'Name',
      description: 'Full name of the contact.',
      type: 'string',
    },
    firstName: {
      title: 'First name',
      description: `First name of the contact.
                    <br>*Only applicable to [WhatsApp](#tag/WhatsApp), [Facebook](#tag/Facebook) and [Telegram](#tag/Telegram) channels.*`,
      type: 'string',
    },
    lastName: {
      title: 'Last name',
      description: `Last name of the contact.
                    <br>*Only applicable to [WhatsApp](#tag/WhatsApp), [Facebook](#tag/Facebook) and [Telegram](#tag/Telegram) channels.*`,
      type: 'string',
    },
    userName: {
      title: 'User name',
      description: `User name of the contact.
                    <br>*Only applicable to [Instagram](#tag/Instagram) channel.*`,
      type: 'string',
    },
    picture: {
      title: 'Picture',
      description: `URL for the profile picture of the contact.
                    <br>*Only applicable to [Instagram](#tag/Instagram) and [Facebook](#tag/Facebook) channels.*`,
      type: 'string',
    },

  },
};

export const ref = createComponentRef(__filename);
export default visitor;
