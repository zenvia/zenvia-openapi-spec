import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as tokenRef } from '../requests/token';
import { ref as verifyRef } from '../requests/verify';
import { ref as deliveryRef } from '../requests/delivery';
import { ref as contentRef } from '../requests/content';
import { ref as websiteRef } from '../requests/website';

const tokenConfigResponse: SchemaObject = {
  title: 'Token Configuration Creation',
  type: 'array',
  description: 'Token configuration created response',
  items: {
    type: 'object',
    properties: {
      id: {
        title: 'Token Configuration Id',
        type: 'string',
        description: 'The configuration\'s unique Id',
        example: '11401560-bffb-4ef3-a08e-989a15ed3c32',
      },
      token: {
        $ref: tokenRef,
      },
      verify: {
        $ref: verifyRef,
      },
      delivery: {
        $ref: deliveryRef,
      },
      content: {
        $ref: contentRef,
      },
      website: {
        $ref: websiteRef,
      },
      createdAt: {
        title: 'Creation Timestamp',
        description: 'Timestamp of the configuration token creation',
        type: 'string',
        example: '2022-10-27T13:25:11.354Z',
      },
      updatedAt: {
        title: 'Update timestamp',
        description: 'Timestamp of the token updates',
        type: 'string',
        example: '2022-10-27T13:25:11.354Z',
      },
    },
  },

};

export const ref = createComponentRef(__filename);
export default tokenConfigResponse;
