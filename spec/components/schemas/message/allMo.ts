import { SchemaObject } from "openapi3-ts";
import { createComponentRef } from "../../../../utils/ref";
import all from "./all";
import { ref as baseMo } from './baseMo'
import * as _ from 'lodash';

const newAll: SchemaObject = _.cloneDeep(all);
newAll.allOf[0].$ref = baseMo;

export const ref = createComponentRef(__filename);
export default newAll;
