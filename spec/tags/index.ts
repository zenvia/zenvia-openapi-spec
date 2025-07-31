import { TagObject } from 'openapi3-ts';
import { rawLoad } from '../../utils/raw-load';

const tagDefinitions: {
  name: string;
  file: string;
}[] = [
  { name: 'Content types', file: 'content-types' },
  { name: 'SMS', file: 'sms' },
  { name: 'WhatsApp', file: 'whatsapp' },
  { name: 'Facebook', file: 'facebook' },
  { name: 'Instagram', file: 'instagram' },
  { name: 'Google Business Messages', file: 'gbm' },
  { name: 'RCS', file: 'rcs' },
  { name: 'Telegram', file: 'telegram' },
  { name: 'Voice', file: 'voice' },
  { name: 'E-Mail', file: 'email' },
  { name: 'Flow Batches', file: 'flow-batches' },
  { name: 'Message Batches', file: 'batches' },
  { name: 'Two Factor Authentication', file: '2fa' },
  { name: 'Webhooks', file: 'subscriptions' },
  { name: 'Templates', file: 'templates' },
  { name: 'Message Report', file: 'message-report' },
  { name: 'Flow Report', file: 'flow-report' },
  { name: 'Files', file: 'files' },
  { name: 'Marketing Automations', file: 'marketing-automations' },
  { name: 'Status Groups', file: 'status-groups' },
  { name: 'Contact Batches', file: 'contact-batches' },
  { name: 'Invoice Batches', file: 'invoice-batches' },
];

const tags: TagObject[] = tagDefinitions.map(tag  => ({
  name: tag.name,
  description: rawLoad(__dirname, `./${tag.file}.md`),
}));

export default tags;