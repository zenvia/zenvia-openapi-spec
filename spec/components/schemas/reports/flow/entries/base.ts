// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Entry object for Message Report',
  description: 'The entry object model for Message Report.',
  type: 'object',
  properties: {
    flowId: {
      title: 'Flow ID',
      description: 'The flow identifier.',
      type: 'string',
    },
    dispatchId: {
      title: 'Dispatch ID',
      description: 'The dispatch identifier.',
      type: 'string',
    },
    sessionId: {
      title: 'Session ID',
      description: 'The session identifier.',
      type: 'string',
    },
    firstEventTimestamp: {
      title: 'First event timestamp',
      description: 'Time of the first event with the client.',
      type: 'string',
    },
    lastEventTimestamp: {
      title: 'Last event timestamp',
      description: 'Time of the last event with the client.',
      type: 'string',
    },
    variables: {
      title: 'Objects of varibles',
      description: 'Object where is saved all the variables of flow.',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
