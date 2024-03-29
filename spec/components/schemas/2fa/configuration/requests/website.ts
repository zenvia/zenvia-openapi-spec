import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const website: SchemaObject = {
  title: 'Website domains',
  description: 'Information needed to use this two factor authentication API service on a website',
  type: 'object',
  properties: {
    domains: {
      title: 'List of Domains',
      type: 'array',
      description: 'List of client domains allowed to use the two-factor authentication service',
      items: {
        type: 'string',
      },
      example: ['app.zenvia.com'],
    },
    // appPackages: {
    //   title: 'List of apps',
    //   type: 'array',
    //   description: 'List of Android apps allowed to use the two factor authentication service',
    //   items: {
    //     type: 'string',
    //   },
    //   example: ['com.zenvia.android.app'],
    // },
    websiteKey: {
      type: 'string',
      description: 'The platform generates a key that the client\'s frontend must use to identify itself',
      readOnly: true,
      example: 'XXXXXXXXXXXXXX',
    },
  },
};

export const ref = createComponentRef(__filename);
export default website;
