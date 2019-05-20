import { TagGroupObject } from "openapi3-ts";

const groups: TagGroupObject[] = [{
  name: 'Chatbots',
  tags: [
    'Chatbots',
    'Dispatches',
  ],
}, {
  name: 'Credentials',
  tags: [
    'Credentials',
  ],
}, {
  name: 'Messaging',
  tags: [
    'SMS',
    'WhatsApp',
    'Facebook',
  ],
}, {
  name: 'Reports',
  tags: [
    'Consumption',
    'Engagement',
  ],
}, {
  name: 'Subscriptions',
  tags: [
    'Subscriptions'
  ],
}];

export default groups;
