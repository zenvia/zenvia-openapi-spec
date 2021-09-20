// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as localeSchemaRef } from './template-locale';
import { ref as categorySchemaRef } from './template-category';
import { ref as componentsSchemaRef } from './components';
import { ref as notificationEmailSchemaRef } from './template-notification-email';
import { ref as examplesSchemaRef } from './template-example';

const partial: SchemaObject = {
  title: 'Template Object',
  description: 'This is a Template object model',
  type: 'object',
  properties: {
    locale: {
      $ref: localeSchemaRef,
    },
    category: {
      $ref: categorySchemaRef,
    },
    components: {
      $ref: componentsSchemaRef,
    },
    examples: {
      $ref: examplesSchemaRef,
    },
    notificationEmail: {
      $ref: notificationEmailSchemaRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default partial;
