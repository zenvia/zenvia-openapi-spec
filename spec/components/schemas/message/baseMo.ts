import { createComponentRef } from "../../../../utils/ref";
import base from "./base";

const newBase = Object.assign({}, base);
delete newBase.properties.externalId;

export const ref = createComponentRef(__filename);
export default newBase;
