import { OperationObject, PathItemObject, ResponseObject } from "openapi3-ts";
import { ref as tokenRef } from '../../components/schemas/two-fa/token/token';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
    description: 'Send a token',
    tags: ['Two factor authentication'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: tokenRef,
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
}

const path: PathItemObject = {
    post,
  };

export default path;