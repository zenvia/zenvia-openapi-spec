import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const origin: SchemaObject = {
  title: 'Origin',
  description: 'The event origin',
  type: 'string',
  enum: [
    'FirstAction',
    'WebClient',
    'WebAgent',
    'Email',
    'SystemTrigger',
    'WebChatOnline',
    'WebChatOffline',
    'EmailSent',
    'ContactForm',
    'WebApi',
    'AutomaticSchedule',
    'JiraIssue',
    'RedmineIssue',
    'ReceivedCall',
    'MadeCall',
    'LostCall',
    'DropoutCall',
    'RemoteAccess',
    'WhatsApp',
    'MovideskIntegration',
    'ZenviaChat',
    'NotAnsweredCall',
    'FacebookMessenger',
    'ZaasWhatsApp',
    'NLU',
    'ActiveWhatsapp',
    'WhatsappNLU',
    'ActiveWhatsappNLU',
    'ChatZccServe',
    'ChatZccServeSimulator',
  ],
  readOnly: true,
};

export const ref = createComponentRef(__filename);
export default origin;
