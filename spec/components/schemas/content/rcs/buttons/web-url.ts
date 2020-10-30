// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './../../base';

const weburl: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text:{
        type: 'string',
        title: 'Text to be send',
      },
      link: {
        type: 'string',
        title: 'Link',
        description: 'Link to be send',
      },
    },
    required: [
      'type',
      'text',
      'link',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default weburl;
