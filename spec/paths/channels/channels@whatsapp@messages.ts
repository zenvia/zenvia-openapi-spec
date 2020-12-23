import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as whatsappMessageRef } from '../../components/schemas/message/whatsapp';
import { ref as errorResponseRef } from '../../components/responses/error';
import { file as fileExample } from '../../resources/examples/file';
import { text as textExample } from '../../resources/examples/text';
import { template as templateExample } from '../../resources/examples/template';
import { contacts as contactsExample } from '../../resources/examples/contacts';
import { location as locationExample } from '../../resources/examples/location';
import * as _ from 'lodash';

const post: OperationObject = {
  description: 'Send a WhatsApp message',
  tags: ['WhatsApp'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: whatsappMessageRef,
        },
        examples: {
          text: {
            value: _.cloneDeep(textExample),
          },
          file: {
            value: _.cloneDeep(fileExample),
          },
          template: {
            value: _.cloneDeep(templateExample),
          },
          contacts: {
            value: _.cloneDeep(contactsExample),
          },
          location: {
            value: _.cloneDeep(locationExample),
          },

        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created message',
      content: {
        'application/json': {
          schema: {
            $ref: whatsappMessageRef,
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
};

export default path;
