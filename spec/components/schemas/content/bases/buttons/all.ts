import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as postBackRef } from './postback';
import { ref as webUrlRef } from './web-url';
import { ref as calendarEventRef } from './calendar-event';
import { ref as dialRef } from './dial';
import { ref as shareLocationRef } from './share-location';
import { ref as viewLocationRef } from './view-location';
import { ref as searchLocationRef } from './search-location';

const all: SchemaObject = {
  oneOf: [{
    $ref: postBackRef,
  }, {
    $ref: webUrlRef,
  }, {
    $ref: calendarEventRef,
  }, {
    $ref: dialRef,
  }, {
    $ref: shareLocationRef,
  }, {
    $ref: viewLocationRef,
  }, {
    $ref: searchLocationRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: postBackRef,
      link: webUrlRef,
      calendar_event: calendarEventRef,
      dial: dialRef,
      share_location: shareLocationRef,
      view_location: viewLocationRef,
      search_location: searchLocationRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
