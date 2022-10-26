import { OperationObject, PathItemObject, ResponseObject } from "openapi3-ts";
import { ref as tokenConfigRef } from '../../components/schemas/two-fa/configuration/token-config';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
    description: 'Create a token configuration',
    tags: ['Two factor authentication'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: tokenConfigRef,
          }
        }
      }
    },
    responses:{
      200: {      
      } as ResponseObject,
      default: {
        $ref: errorResponseRef
      }
    }
};

const get: OperationObject = {
  description: 'List all the token configurations',
  tags: ['Two factor authentication'],
  responses:{
    201: {
      description: 'Return all tokens configurations',
      content: {
        'application/json': {
          schema: {
            $ref: tokenConfigRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef
    }
  }
}

const path: PathItemObject = {
    post,
    get,
  };

export default path;