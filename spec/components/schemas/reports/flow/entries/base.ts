// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Entry object for Flow Report',
  description: 'The entry object model for Flow Report.',
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
      description: 'This ID represents a flow execution. In case of conversational flows, it identifies the conversation in our platform.',
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
      description: 'Object where session variables are saved.',
      type: 'object',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
