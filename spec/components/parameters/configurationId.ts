import { ParameterObject } from "openapi3-ts";
import { createComponentRef } from "../../../utils/ref";

const configurationId: ParameterObject = {
    name: 'configurationId',
    in: 'path',
    required: true,
    description: 'The configuration identifier',
    schema: {
      type: 'string',
    },
  };
  
  export const ref = createComponentRef(__filename);
  export default configurationId;