import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const errorCause: SchemaObject = {
  type: 'object',
  properties: {
    channelErrorCode: {
      title: 'Channel Error Code',
      description: 'An error code returned by the channel.',
      type: 'string',
    },
    reason: {
      title: 'Reason',
      description: 'A likely raw message with the information about the status.',
      type: 'string',
    },
    details: {
      title: 'Details',
      description: 'A human readable text to help identify the problem source.',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default errorCause;
