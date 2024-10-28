import { createComponentRef } from "../../../../utils/ref";
import all from "./all";
import { ref as baseMo } from './baseMo'

console.log('REF:', baseMo)

const newAll = Object.assign({}, all);
newAll.allOf[0].$ref = baseMo;

export const ref = createComponentRef(__filename);
export default newAll;
