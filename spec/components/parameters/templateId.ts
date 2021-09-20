import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const templateId: ParameterObject = {
  name: 'templateId',
  in: 'path',
  required: true,
  description: 'The <a href="https://app.zenvia.com/home/templates">template identifier</a>',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default templateId;
