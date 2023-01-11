import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './attachment-base';
import { ref as fileRef } from '../../../content/bases/file';

const attachmentFixed: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    $ref: fileRef,
  }],
};

export const ref = createComponentRef(__filename);
export default attachmentFixed;
