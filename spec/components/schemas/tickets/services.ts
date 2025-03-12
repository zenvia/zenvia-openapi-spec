import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Services',
  description: 'Service information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the service.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Name of the service.',
      type: 'string',
    },
    description: {
      title: 'Description',
      description: 'Description of the service.',
      type: 'string',
    },
    parentId: {
      title: 'Parent Service',
      description: 'Parent of the service',
      type: 'integer',
    },
    ticketType: {
      title: 'Ticket Type',
      description: 'Ticket type which can use the service',
      type: 'string',
    },
    visibleTo: {
      title: 'Visible To',
      description: 'Defines who can view the service',
      type: 'string'
    },
    allowSelection: {
      title: 'Allow Selection',
      description: 'Defines who can select the service',
      type: 'string',
    },
    allowFinishTicket: {
      title: 'Allow Finish Ticket',
      description: 'Defines if tickets in this service can be finished',
      type: 'boolean',
    },
    allowAllCategories: {
      title: 'Allow All Categories',
      description: 'Defines that all categories are allowed in the service',
      type: 'boolean',
    },
    categoriesAllowed: {
      title: 'Categories Allowed',
      description: 'Defines a list of categories that are allowed in the service',
      type: 'array',
    },
    defaultCategoryId: {
      title: 'Default Category Id',
      description: 'Defines the default category when service is selected',
      type: 'integer',
    },
    defaultUrgencyId: {
      title: 'Default Urgency Id',
      description: 'Defines the default urgency when service is selected',
      type: 'integer',
    },
    isActive: {
      title: 'Is Active',
      description: 'Defines if service is active.',
      type: 'boolean',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;