import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const visitor: SchemaObject = {
  title: 'Visitor Object',
  description: 'It indicates the name of the visitor who sent the message',
  type: 'object',
  properties: {
    name: {
      title: 'Name',
      description: 'Full name of the visitor',
      type: 'string',
    },
    firstName: {
      title: 'First name',
      description: 'First name of the visitor',
      type: 'string',
    },
    lastName: {
      title: 'Last name',
      description: 'Last name of the visitor',
      type: 'string',
    },
    userName: {
      title: 'User name',
      description: `User name of the contact.
                    <br>*Only applicable to [Instagram channel](#tag/Instagram).*`,
      type: 'string',
    },

  },
};

export const ref = createComponentRef(__filename);
export default visitor;
