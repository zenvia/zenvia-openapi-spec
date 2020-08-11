import { TagGroupObject } from 'openapi3-ts';

const groups: TagGroupObject[] = [{
  name: 'Messaging',
  tags: [
    'SMS',
    'WhatsApp',
    'Facebook',
  ],
}, {
  name: 'Webhooks',
  tags: [
    'Webhooks',
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
    'Flow Report',
  ],
}];

export default groups;
