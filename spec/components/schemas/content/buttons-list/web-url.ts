// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from '../base';

const weburl: SchemaObject = {
  type: 'object',
  description: "Opens a URL on user's device and sends the payload field content to the Agent.",
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text:{
        type: 'string',
        description: 'Text to be displayed inside the button.',
      },
      link: {
        type: 'string',
        description: 'Link to be sent.',
      },
      payload: {
        type: 'string',
        description: 'Content to be sent back to the Agent when the user clicks the button.',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default weburl;
