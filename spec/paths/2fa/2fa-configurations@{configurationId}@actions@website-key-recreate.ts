import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as websiteKeyRecreatedRef } from '../../components/schemas/2fa/configuration/responses/websitekey-recreated';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as configurationIdRef } from '../../components/parameters/configurationId';

const post: OperationObject = {
  description: 'Recreate websitekey',
  tags: ['Two Factor Authentication'],
  responses: {
    200: {
      description: 'Returns success',
      content: {
        'application/json': {
          schema: {
            $ref: websiteKeyRecreatedRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  post,
  parameters: [{
    $ref: configurationIdRef,
  }],
};

export default path;
