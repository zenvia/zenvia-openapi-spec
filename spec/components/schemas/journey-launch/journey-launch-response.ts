import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const journeyLaunchResponse: SchemaObject = {
  title: 'Journey Launch Response',
  description: 'The journey launch created for a contact/target.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'Unique identifier of the created journey launch.',
      type: 'string',
      readOnly: true,
      example: '7388c68e-675e-435b-b2ec-f72677798678',
    },
    orgId: {
      title: 'Organization ID',
      description: 'Identifier of the organization that owns this journey launch.',
      type: 'string',
      readOnly: true,
      example: '5c408dd6-a39a-4eb1-b3b0-bf6f2f34ea39',
    },
    journeyId: {
      title: 'Journey ID',
      description: 'Echoes the requested journey identifier.',
      type: 'string',
      example: 'journey-01',
    },
    externalId: {
      title: 'External ID',
      description: 'Echoes the externalId received in the request.',
      type: 'string',
      example: 'launch-01',
    },
    target: {
      title: 'Target',
      description: 'The contact in ZStudio\'s internal target format, passed through as received by the backend.',
      type: 'object',
      additionalProperties: true,
    },
    context: {
      title: 'Context',
      description: 'The context values as received in the request, passed through.',
      type: 'object',
      additionalProperties: true,
    },
    versionTag: {
      title: 'Version Tag',
      description: 'Echoes the requested version tag, when provided.',
      type: 'string',
      example: 'v1',
    },
    status: {
      title: 'Status',
      description: 'The journey launch status.',
      type: 'string',
      example: 'published',
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the journey launch creation.',
      type: 'string',
      format: 'date-time',
      readOnly: true,
      example: '2022-05-23T19:37:59.000Z',
    },
  },
};

export const ref = createComponentRef(__filename);
export default journeyLaunchResponse;
