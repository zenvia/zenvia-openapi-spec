// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';
import { ref as baseRef } from '../base';
import { ref as urlRef } from '../button-item-url';
import { ref as phoneNumberRef } from '../button-item-phone-number';
import { ref as viewLocationRef } from './button-item-view-location';
import { ref as searchLocationRef } from './button-item-search-location';
import { ref as shareLocationRef } from './button-item-share-location';
import { ref as calendarEventRef } from './button-item-calendar-event';

const buttons: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      items: {
        title: 'Buttons',
        description: 'List of buttons.',
        maxItems: 2,
        type: 'array',
        items: {
          type: 'object',
          oneOf: [
            { $ref: urlRef },
            { $ref: phoneNumberRef },
            { $ref: viewLocationRef },
            { $ref: searchLocationRef },
            { $ref: shareLocationRef },
            { $ref: calendarEventRef },
          ],
          required: [
            'type',
          ],
          discriminator: {
            propertyName: 'type',
            mapping: {
              URL: urlRef,
              PHONE_NUMBER: phoneNumberRef,
              VIEW_LOCATION: viewLocationRef,
              SEARCH_LOCATION: searchLocationRef,
              SHARE_LOCATION: shareLocationRef,
              CALENDAR_EVENT: calendarEventRef,
            },
          },
        },
      },
    },
    required: [
      'items',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default buttons;
