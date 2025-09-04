import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as whatsappMessageRef } from '../../components/schemas/message/whatsapp';
import { ref as errorResponseRef } from '../../components/responses/error';
import { whatsappExamples } from '../../resources/examples/from-to/whatsapp';
import { file as fileExample } from '../../resources/examples/file';
import { text as textExample } from '../../resources/examples/text';
import { template as templateExample } from '../../resources/examples/template';
import { contacts as contactsExample } from '../../resources/examples/contacts';
import { location as locationExample } from '../../resources/examples/location';
import { button as buttonExample } from '../../resources/examples/button';
import { list as listExample } from '../../resources/examples/list';
import { flow as flowExample} from '../../resources/examples/flow';
import { product } from '../../resources/examples/product';
import { productList } from '../../resources/examples/product-list';
import { orderDetailsTemplate } from '../../resources/examples/order-details-template';

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
            value: whatsappExamples(textExample()),
          },
          file: {
            value: whatsappExamples(fileExample()),
          },
          template: {
            value: whatsappExamples(templateExample(orderDetailsTemplate())),
          },
          contacts: {
            value: whatsappExamples(contactsExample()),
          },
          location: {
            value: whatsappExamples(locationExample()),
          },
          button: {
            value: whatsappExamples(buttonExample()),
          },
          list: {
            value: whatsappExamples(listExample()),
          },
          product: {
            value: whatsappExamples(product()),
          },
          product_list: {
            value: whatsappExamples(productList()),
          },
          flow: {
            value: whatsappExamples(flowExample()),
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
