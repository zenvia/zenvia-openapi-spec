import { TagGroupObject } from 'openapi3-ts';

const groups: TagGroupObject[] = [{
  name: 'Messaging',
  tags: [
    'SMS',
    'WhatsApp',
    'Facebook',
  ],
}, {
  name: 'Subscriptions',
  tags: [
    'Subscriptions',
  ],
}, {
  name: 'Usage',
  tags: [
    'Usage',
  ],
}];

export default groups;
