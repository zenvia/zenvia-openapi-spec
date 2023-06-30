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
    'Two Factor Authentication',
    'Automation Dispatcher',
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
    'Contacts',
    'Contact Lists',
    'Contact Custom Data Fields',
  ],
}, {
  name: 'Reports',
  tags: [
    'Message Report',
    'Flow Report',
  ],
}, {
  name: 'Automation Dispatcher',
  tags: [
    'Automation Dispatcher',
  ],
}];

export default groups;
