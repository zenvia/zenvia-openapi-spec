import { OperationObject, PathItemObject, ResponseObject } from "openapi3-ts";
import { ref as tokenVerifyRef } from '../../components/schemas/two-fa/token/code';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
    description: 'Verify a token using the configuration id',
    tags: ['Two factor authentication'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: tokenVerifyRef,
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