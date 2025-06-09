import * as _ from 'lodash';
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as productListOrderRef } from './product-list-order';
import { ref as unsupportedRef } from './unsupported';
import mt from './mt';

const all: SchemaObject = _.cloneDeep(mt);
all.oneOf.push({ $ref: productListOrderRef }, { $ref: unsupportedRef });
all.discriminator.mapping.product_list_order = productListOrderRef;
all.discriminator.mapping.unsupported = unsupportedRef;

export const ref = createComponentRef(__filename);
export default all;
