import { CallbackObject, PathItemObject } from 'openapi3-ts';
import { ref as sentMessageSchemaRef } from '../schemas/message/whatsapp/sent';
import { createComponentRef } from '../../../utils/ref';

const callback: CallbackObject = {
  '/webhook': {
    post: {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: sentMessageSchemaRef,
            },
          },
        },
      },
      responses: {
        200: {
          description: 'webhook successfully processed and no retries will be performed',
        },
      },
    },
  } as PathItemObject,
};

export const ref = createComponentRef(__filename);
export default callback;
