import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const sms: SchemaObject = {
  type: 'object',
  title: 'SMS',
  description: 'SMS specific details about the message.',
  properties: {
    carrier: {
      title: 'Carrier',
      description: 'Carrier of the contact.<br>If the carrier is not included in this list, it will not be provided in the webhook payload.',
      type: 'string',
      enum: [
        'CLARO_BR',
        'OI_BR',
        'TIM_BR',
        'VIVO_BR',
        'NEXTEL_BR',
        'CTBC_BR',
        'SERCOMTEL_BR',
        'AMERICANET_BR',
        'AEIOU_BR',
        'SAFRA_BR',
        'DATORA_BR',
        'SURF_BR',
        'TELECALL_BR',
        'LIGUE_BR',
        'AMAZONIA_BR',
      ],
    },
  },
};

export const ref = createComponentRef(__filename);
export default sms;
