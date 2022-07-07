import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const buttonBase: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title: 'Button type',
      description: 'Button type discriminator.',
      type: 'string',
    },
    text: {
      type: 'string',
      description: 'Text to be displayed inside the button.',
      example: 'Click me!',
    },
    payload: {
      type: 'string',
      description: `Content to be sent back as a message or a status event when the user clicks the button.
        <br>By default, the text of the button will be used as payload.
        <br><br>*Only applicable to \`text\` buttons on most channels, because there is no click feedback for the other button types.
        Applicable to all button types on [RCS](#tag/RCS) and [Google Business Messages](#tag/Google-Business-Messages) channels.*
        <br>*\`text\` buttons clicks are sent back as [message events](#section/MESSAGE), while clicks from the other button types are sent back as [status events](#section/MESSAGE_STATUS).*`,
      example: 'clicked-on-button-1',
    },
  },
};

export const ref = createComponentRef(__filename);
export default buttonBase;
