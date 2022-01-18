import { TagGroupObject } from 'openapi3-ts';

const groups: TagGroupObject[] = [{
  name: 'Messaging',
  tags: [
    'Content types',
    'SMS',
    'WhatsApp',
    'Instagram',
    'Facebook',
    'RCS',
    'Telegram',
    'Google Business Messages',
    'Voice',
    'Batches',
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
  name: 'File Storage',
  tags: [
    'Files',
  ],
}, {
  name: 'Reports',
  tags: [
    'Message Report',
    'Flow Report',
  ],
}];

export default groups;
