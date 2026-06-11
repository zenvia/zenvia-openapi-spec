import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as recordedRef } from './message-status-code/recorded';
import { ref as terminatedRef } from './message-status-code/terminated';
import { ref as baseRef } from './message-status-base';

const webhook: SchemaObject = {
  type: 'object',
  title: 'Message Status',
  required: ['code'],
  oneOf: [{
    $ref: recordedRef,
  }, {
    $ref: baseRef,
  }, {
    $ref: terminatedRef,
  }],
  discriminator: {
    propertyName: 'code',
    mapping: {
      SENT: baseRef,
      DELIVERED: baseRef,
      READ: baseRef,
      CLICKED: baseRef,
      VERIFIED: baseRef,
      REJECTED: baseRef,
      NOT_DELIVERED: baseRef,
      DELETED: baseRef,
      ACCEPTED: baseRef,
      HANG_UP: baseRef,
      TERMINATED: terminatedRef,
      RECORDED: recordedRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default webhook;
