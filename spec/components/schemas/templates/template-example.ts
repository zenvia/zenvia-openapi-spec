import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const example: SchemaObject = {
  title: 'Examples',
  description: `Provides an example of possible model data. This helps during the review and approval process so that Facebook can understand what
                kind of messages you plan to send. Make sure they are examples and do not include personal or confidential information.
                If you decide to include variables and examples, provide them in the same number.
                <br>If you are creating a template with media, the key must be <code>imageUrl</code>, <code>documentUrl</code> or <code>videoUrl</code>,
                being assigned the example url.`,
  type: 'object',
  example: {
    imageUrl: 'https://example.com/image.jpeg',
    name: 'John Smith',
  },
};

export const ref = createComponentRef(__filename);
export default example;
