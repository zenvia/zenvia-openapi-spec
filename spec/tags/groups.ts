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
  name: 'Templates',
  tags: [
    'Templates',
  ],
}, {
  name: 'Reports',
  tags: [
    'Message Report',
  ],
}];

export default groups;
