import * as _ from 'lodash';
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as productListOrderRef } from './product-list-order';
import mt from './mt';

const all: SchemaObject = _.cloneDeep(mt);
all.oneOf.push({ $ref: productListOrderRef });
all.discriminator.mapping.product_list_order = productListOrderRef;

export const ref = createComponentRef(__filename);
export default all;
