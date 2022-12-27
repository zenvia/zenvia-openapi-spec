import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const disposition: SchemaObject = {
	properties: {
		disposition: {
			title: 'Disposition',
			description: 'Attachment disposition options',
			type: 'string',
		},
		cid: {
			title: 'Content ID',
			type: 'string',
		},
	},
};

export const ref = createComponentRef(__filename);
export default disposition;
