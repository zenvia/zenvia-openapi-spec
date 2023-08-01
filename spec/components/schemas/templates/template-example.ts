import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const example: SchemaObject = {
  title: 'Examples',
  description: `Provides an example of possible model data. This helps during the review and approval process so that the provider (e.g. Meta) can understand what
                kind of messages you plan to send. Ensure these are examples and do not include personal or confidential information.
                In case you decide to include variables and examples, provide them with the same number.
                <br>In case you are creating a template with media, the key must be <code>imageUrl</code>, <code>documentUrl</code> or <code>videoUrl</code>,
                being assigned the example URL.
                <br>This field is mandatory only for the WhatsApp channel, in this channel each example must have the same name as each existing variable and it
                 must not be composed of empty spaces only.`,
  type: 'object',
  example: {
    imageUrl: 'https://example.com/image.jpeg',
    name: 'John Smith',
  },
};

export const ref = createComponentRef(__filename);
export default example;
