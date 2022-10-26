import { OperationObject, PathItemObject, ResponseObject } from "openapi3-ts";
import { ref as toCodeRef } from '../../components/schemas/two-fa/token/to-code';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
    description: 'Verify a token',
    tags: ['Two factor authentication'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: toCodeRef,
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