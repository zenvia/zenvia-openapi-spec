import * as _ from 'lodash';
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as optInResponseRef } from '../notification_optin';
import mt from './mt';

const all: SchemaObject = _.cloneDeep(mt);
all.oneOf.push({ $ref: optInResponseRef });
all.discriminator.mapping.notification_optin = optInResponseRef;

export const ref = createComponentRef(__filename);
export default all;
