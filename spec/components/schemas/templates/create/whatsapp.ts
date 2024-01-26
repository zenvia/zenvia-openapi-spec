import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as whatsappTemplateCategoriesRef } from '../category/whatsapp';
import { ref as whatsappComponents } from '../components/whatsapp';

const whatsappTemplate: SchemaObject = {
  type: 'object',
  allOf: [{
    type: 'object',
    properties: {
      components: {
        $ref: whatsappComponents,
      },
      category: {
        $ref: whatsappTemplateCategoriesRef,
      },
      qualityScore: {
        title: 'Quality Score',
        description: 'Quality score of the template while active,  specific for WhatsApp templates, this field is based on the end client feedback and there are four possible scores: Pending (not enough feedback to classify the template quality, this template can be sent to clients), High (few or no negative feedback, this template can be sent to clients), Medium (has received negative feedback from several clients, this template can be sent to clients, but there is a risk of it being paused or disabled soon unless the problems reported by the clients are resolved) and Low (has received negative feedback from several clients, templates of this status can still be sent to clients, but there is a risk of it being suspended or disabled soon, so it is recommended that the problems reported by the clients are resolved as soon as possible).',
        type: 'string',
        enum: [
          'UNKNOWN',
          'GREEN',
          'YELLOW',
          'RED',
        ],
        readOnly: true,
      },
    },
  }, {
    $ref: baseRef,
  }],

};

export const ref = createComponentRef(__filename);
export default whatsappTemplate;
