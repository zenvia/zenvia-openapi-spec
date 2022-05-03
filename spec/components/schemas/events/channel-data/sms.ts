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
        'VIVO_BR',
        'CLARO_BR',
        'TIM_BR',
        'OI_BR',
        'CTBC_BR',
        'SERCOMTEL_BR',
        'SURF_BR',
        'AMERICANET_BR',
        'SAFRA_BR',
        'TELECALL_BR',
        'DATORA_BR',
        'SAFRA_BR',
        'TELCEL_MX',
        'CONCEPTO_MX',
        'AT_T_MX',
        'MOVISTAR_MX',
        'ALTAN_MX',
      ],
    },
  },
};

export const ref = createComponentRef(__filename);
export default sms;
