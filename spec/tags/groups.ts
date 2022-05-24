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
    'E-Mail',
    'Message Batches',
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
  name: 'Flow',
  tags: [
    'Flow Batches',
  ],
}, {
  name: 'Contacts',
  tags: [
    'Contact Data Fields',
    'Contacts',
    'Contact Lists',
  ],
}, {
  name: 'Reports',
  tags: [
    'Message Report',
    'Flow Report',
  ],
}];

export default groups;
