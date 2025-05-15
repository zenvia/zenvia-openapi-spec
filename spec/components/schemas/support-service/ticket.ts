import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ticketTypeRef } from './context/ticket-type';
import { ref as justificationRef } from './context/justification';
import { ref as statusRef } from './context/status';
import { ref as urgencyRef } from './context/urgency';
import { ref as categoryRef } from './context/category';
import { ref as ownerTeamRef } from './context/owner-team';
import { ref as serviceRef } from './context/service';
import { ref as originTypeRef } from './context/origin-type';
import { ref as firstActionRef } from './context/first-action';

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
      nullable: false,
    },
    type: {
      $ref: ticketTypeRef,
    },
    origin: {
      $ref: originTypeRef,
    },
    originEmailAccount: {
      title: 'Origin Account Email',
      description: 'Support email account that received the email which created the ticket.',
      type: 'string',
      readOnly: true,
      nullable: true,
    },
    subject: {
      title: 'Subject',
      description: 'Subject of the ticket.',
      type: 'string',
      nullable: false,
    },
    cc: {
      title: 'Cc',
      description: 'List of email addresses in the ticket’s CC.',
      type: 'array',
      nullable: false,
      items: {
        type: 'string',
      },
      example: ['cc1@zenvia.com'],
    },
    clients: {
      title: 'Clients',
      description: 'List of client identifiers of the ticket.',
      type: 'array',
      nullable: false,
      items: {
        type: 'string',
      },
      example: ['a4a4bc53-8396-4190-92e3-7edb6826e3dc'],
    },
    ownerId: {
      title: 'Owner Id',
      description: 'Owner identification if ticket owner is an agent.',
      type: 'string',
      example: '5404ed19-2994-4831-bb33-627e27b18ab1',
      nullable: true,
    },
    ownerTeam: {
      $ref: ownerTeamRef,
    },
    category: {
      $ref: categoryRef,
    },
    urgency: {
      $ref: urgencyRef,
    },
    status: {
      $ref: statusRef,
    },
    service: {
      $ref: serviceRef,
    },
    justification: {
      $ref: justificationRef,
    },
    resolvedAt: {
      title: 'Resolved At',
      description: 'Resolved ticket timestamp.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    reopenedAt: {
      title: 'Reopened At',
      description: 'Reopened ticket timestamp.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    closedAt: {
      title: 'Closed At',
      description: 'Closed ticket timestamp.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the ticket creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: false,
    },
    createdById: {
      title: 'Created By Id',
      description: 'Created by identifier.',
      type: 'string',
      example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
      nullable: true,
    },
    updatedAt: {
      title: 'Updated At',
      description: 'Timestamp of the ticket update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
      nullable: true,
    },
    solutionTime: {
      title: 'Solution Time',
      description: 'SLA resolution time. Returns a numeric value in minutes. If there are no SLA policies applied to this ticket, this property will be blank.',
      type: 'integer',
      readOnly: true,
      nullable: true,
    },
    responseTime: {
      title: 'Response Time',
      description: 'SLA first-response time. Returns a numeric value in minutes. If there are no SLA policies applied to this ticket, this property will be blank.',
      type: 'integer',
      readOnly: true,
      nullable: true,
    },
    solutionAt: {
      title: 'Solution At',
      description: 'Ticket resolution due date. If the resolution due date is updated via the API, it will be considered as having been set manually by the agent who added the last ticket action.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    responseAt: {
      title: 'Response At',
      description: 'Ticket first-response due date.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
      nullable: true,
    },
    realResponseAt: {
      title: 'Real Response At',
      description: 'Actual first-response date.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
      nullable: true,
    },
    solutionDateIsPaused: {
      title: 'Solution Date Is Paused',
      description: 'Returns true if the SLA time for ticket resolution is paused, and false if it is not paused.',
      type: 'boolean',
      readOnly: true,
    },
    solutionChangedByUser: {
      title: 'Solution Changed By User',
      description: 'Returns true if the current ticket resolution due date was set manually, and false if it was calculated by the system.',
      type: 'boolean',
      readOnly: true,
    },
    solutionChangedById: {
      title: 'Solution Changed By User Id',
      description: 'User that manually set the resolution due date on the ticket.',
      type: 'string',
      readOnly: true,
      nullable: true,
      example: '5404ed19-2994-4831-bb33-627e27b18ab1',
    },
    agreement: {
      title: 'Agreement',
      description: 'SLA policy applied to the ticket.',
      readOnly: true,
      nullable: true,
      type: 'object',
      properties: {
        id: {
          title: 'Agreement Id',
          description: 'Identifier of the SLA policy.',
          type: 'integer',
          readOnly: true,
        },
        name: {
          title: 'Agreement',
          description: 'Name of the SLA policy.',
          type: 'string',
          readOnly: true,
        },
        rule: {
          title: 'Agreement Rule',
          description: 'SLA rule applied to the ticket.',
          type: 'string',
          readOnly: true,
        },
      },
    },
    firstAction: {
      $ref: firstActionRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
