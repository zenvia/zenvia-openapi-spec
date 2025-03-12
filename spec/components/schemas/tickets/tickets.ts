import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ticketTypeRef } from './context/ticket-type';
import { ref as originRef } from './context/origin';
import { ref as systemStatusRef } from './context/system-status';

const base: SchemaObject = {
  title: 'Tickets',
  description: 'Ticket information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the ticket.',
      type: 'string',
      readOnly: true,
    },
    type: {
      $ref: ticketTypeRef,
    },
    subject: {
      title: 'Subject',
      description: 'Subject of the ticket.',
      type: 'string',
    },
    urgency: {
      title: 'Urgency',
      description: 'Urgency of the ticket',
      type: 'string',
    },
    category: {
      title: 'Category',
      description: 'Category of the ticket',
      type: 'string',
    },
    status: {
      title: 'Status',
      description: 'Status of the ticket',
      type: 'string',
    },
    systemStatus: {
      $ref: systemStatusRef,
    },
    justification: {
      title: 'Justification',
      description: 'Justification linked with the last status of the ticket',
      type: 'string',
    },
    origin: {
      $ref: originRef,
    },
    cc: {
      title: 'Cc',
      description: 'Emails in cc of the ticket',
      type: 'array',
      items: {
        type: 'string',
        example: 'cc1@zenvia.com',
      },
    },
    ownerId: {
      title: 'Owner Id',
      description: 'Owner identification if ticket owner is an agent',
      type: 'string',
      example: '5404ed19-2994-4831-bb33-627e27b18ab1',
    },
    ownerTeam: {
      title: 'Owner Team',
      description: 'Team name if ticket owner is a team',
      type: 'string',
      example: 'Agents',
    },
    clients: {
      title: 'Clients',
      description: 'Clients of the ticket',
      type: 'array',
      items: {
        type: 'string',
        example: 'a4a4bc53-8396-4190-92e3-7edb6826e3dc',
      },
    },
    service: {
      title: 'Service',
      description: 'Service of the ticket',
      type: 'string',
    },
    services: {
      title: 'Services',
      description: 'Services tree of the service linked in ticket',
      type: 'array',
      readOnly: true,
      items: {
        type: 'object',
        properties: {
          level: {
            title: 'Level',
            type: 'integer',
          },
          name: {
            title: 'Name',
            type: 'string',
          },
        },
      },
    },
    resolvedAt: {
      title: 'Resolved At',
      description: 'Resolved ticket timestamp',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
    },
    reopenedAt: {
      title: 'Reopened At',
      description: 'Reopened ticket timestamp',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
    },
    closedAt: {
      title: 'Closed At',
      description: 'Closed ticket timestamp',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the ticket creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
    createdBy: {
      title: 'Created By',
      description: 'Created by identifier',
      type: 'string',
      example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
      readOnly: true,
    },
    updatedAt: {
      title: 'Updated At',
      description: 'Timestamp of the ticket update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
    sla: {
      title: 'SLA',
      description: 'Ticket SLA',
      type: 'object',
      properties: {
        agreement: {
          title: 'Agreement',
          type: 'string',
        },
        agreementRule: {
          title: 'Agreement Rule',
          type: 'string',
        },
        solutionTime: {
          title: 'Solution Time',
          type: 'integer',
        },
        responseTime: {
          title: 'Response Time',
          type: 'integer',
        },
        solutionAt: {
          title: 'Solution At',
          description: 'SLA solution timestamp',
          type: 'string',
          example: '2022-05-23T19:37:59.000Z',
        },
        responseAt: {
          title: 'Response At',
          description: 'SLA response timestamp',
          type: 'string',
          example: '2022-05-23T19:37:59.000Z',
        },
        realResponseAt: {
          title: 'Real Response At',
          description: 'SLA real response timestamp',
          type: 'string',
          example: '2022-05-23T19:37:59.000Z',
        },
        solutionDateIsPaused: {
          title: 'Solution Date is Paused',
          type: 'boolean',
        },
        indicatorBeforePause: {
          title: 'Indicator Before Pause',
          type: 'string',
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;