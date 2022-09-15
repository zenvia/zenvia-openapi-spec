import * as _ from 'lodash';
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as notificationOptInRef } from './notification-optIn';
import mt from './mt';

const all: SchemaObject = _.cloneDeep(mt);
all.oneOf.push({ $ref: notificationOptInRef });
all.discriminator.mapping.notification_optIn = notificationOptInRef;

export const ref = createComponentRef(__filename);
export default all;