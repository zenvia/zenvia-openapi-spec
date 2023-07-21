// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const qualityScore: SchemaObject = {
  title: 'Quality Score',
  description: 'Quality score of the template while active,  specific for WhatsApp templates, this field is based on the end client feedback and there are four possible scores: Pending (not enough feedback to classify the template quality, this template can be sent to clients), High (few or no negative feedback, this template can be sent to clients), Medium (has received negative feedback from several clients, this template can be sent to clients, but there is a risk of it being paused or disabled soon unless the problems reported by the clients are resolved) and Low (has received negative feedback from several clients, templates of this status can still be sent to clients, but there is a risk of it being suspended or disabled soon, so it is recommended that the problems reported by the clients are resolved as soon as possible).',
  type: 'string',
  enum: [
    'UNKNOWN',
    'GREEN',
    'YELLOW',
    'RED',
  ],
};

export const ref = createComponentRef(__filename);
export default qualityScore;
