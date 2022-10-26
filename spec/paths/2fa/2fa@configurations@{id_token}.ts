import { OperationObject, PathItemObject, ResponseObject } from "openapi3-ts";
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenConfigRef } from '../../components/schemas/two-fa/configuration/token-config';

const del: OperationObject = {
    description: 'Delete a token configuration',
    tags: ['Two factor authentication'],
    responses:{
      200: {      
      } as ResponseObject,
      default: {
        $ref: errorResponseRef
      },
    },
  };

  const get: OperationObject = {
    description: 'List a token configuration given the configuration Id',
    tags: ['Two factor authentication'],
    responses:{
      200: {
        description: 'Return the token configuration',
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
  };
  
  const path: PathItemObject = {
    get,
    delete: del
  };

export default path;