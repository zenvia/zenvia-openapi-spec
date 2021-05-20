import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const referral: SchemaObject = {
  title: 'Referral Object',
  description: `Included in notifications when a user clicks on an ad that clicks to WhatsApp and sends a message to the business.
                This object has the ad's information.<br>*Only applicable to [WhatsApp channel](#tag/WhatsApp).*`,
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
      properties: {
        id: {
          title: 'Id',
          description: 'Facebook ID for an ad or a post.',
          type: 'string',
        },
        type: {
          title: 'Type',
          description: 'The type of the ad’s source. Currently, supported values are ad and post.',
          type: 'string',
          enum: ['ad', 'post'],
        },
        url: {
          title: 'Url',
          description: 'The url that leads to the ad. Opening this url takes you to the ad viewed by your user.',
          type: 'string',
          example: 'https://www.zenvia.com',
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default referral;
