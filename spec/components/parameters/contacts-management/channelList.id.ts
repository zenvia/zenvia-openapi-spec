import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const channelListId: ParameterObject = {
  name: 'channelList.id',
  in: 'query',
  description: 'The contact identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default channelListId;
