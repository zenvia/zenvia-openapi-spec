import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const flowId: ParameterObject = {
  name: 'flowId',
  in: 'query',
  required: true,
  description: 'The the flow identifier. You can view your <a href="https://app.zenvia.com/flows" target="_blank"> Flow IDs here.</a>',
  schema: {
    type: 'string',
  },
  example: 'b5agf1-y237-11e8-b127-1230f6c2d98m',
};

export const ref = createComponentRef(__filename);
export default flowId;
