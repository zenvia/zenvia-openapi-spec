import { OperationObject, PathItemObject, ResponseObject } from "openapi3-ts";
import { ref as recipientRef } from '../../components/schemas/two-fa/token/to';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
    description: 'Resend the token',
    tags: ['Two factor authentication'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: recipientRef,
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