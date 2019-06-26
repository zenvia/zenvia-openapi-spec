import { CallbackObject, PathItemObject } from 'openapi3-ts';
import { ref as eventsRef } from '../schemas/events/all';
import { createComponentRef } from '../../../utils/ref';

const callback: CallbackObject = {
  '{$request.body#/webhook/url}': {
    post: {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: eventsRef,
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
