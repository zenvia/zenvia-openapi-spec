import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const referral: SchemaObject = {
  title: 'Referral Object',
  description: `Included in notifications where it is possible to track the source of the message. Examples:
* When an user clicks on an ad that redirects to WhatsApp and sends a message to the business.
* When an user tags the business on their story.
* When an user replies to a story from the business.

*Only applicable to [WhatsApp](#tag/WhatsApp) and [Instagram](#tag/Instagram) channels.*`,
  type: 'object',
  properties: {
    headline: {
      title: 'Headline',
      description: 'Headline used in the ad that generated the message.',
      type: 'string',
      example: 'This is a headline',
    },
    body: {
      title: 'Body',
      description: 'Body from the ad that generated the message.',
      type: 'string',
      example: 'This is a body',
    },
    source: {
      type: 'object',
      title: 'Referral source',
      description: 'Provide details about the source of the message.',
      properties: {
        id: {
          title: 'Id',
          description: 'An id for the message source. The format of the id will depend on the source type.',
          type: 'string',
        },
        type: {
          title: 'Type',
          description: 'The type of content where the message originated.',
          type: 'string',
          enum: ['ad', 'post', 'story_mention', 'story'],
        },
        url: {
          title: 'Url',
          description: 'The url that leads to the message source. Opening this url takes you to the content viewed by your user.',
          type: 'string',
          example: 'https://www.zenvia.com',
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default referral;
