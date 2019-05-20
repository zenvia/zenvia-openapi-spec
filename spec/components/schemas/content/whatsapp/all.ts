import { SchemaObject } from "openapi3-ts";
import { ref as textRef } from '../text';
import { ref as fileRef } from '../file';
import { ref as hsmRef } from './hsm';
import { createComponentRef } from "../../../../../utils/ref";

const all: SchemaObject = {
  oneOf: [{
    $ref: textRef,
  },{
    $ref: fileRef,
  },{
    $ref: hsmRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      'whatsapp.hsm': hsmRef,
    }
  }
};

export const ref = createComponentRef(__filename);
export default all;
