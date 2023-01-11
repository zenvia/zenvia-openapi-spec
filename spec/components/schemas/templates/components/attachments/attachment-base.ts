import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const disposition: SchemaObject = {
  properties: {
    type: {
      title: 'Type',
      description: 'Attachment type discriminator',
      type: 'string',
    },
    cid: {
      type: 'string',
      description: `<br>Allows support for inline attachments. The *cid* may be used in the body to show the attachment inline in the e-mail.
                    <br>
                    <br>For example, using \`promotion.jpeg\` as *cid* is possible to refer it in the body like this:
                    <br>\`<img src="cid:promotion.jpeg">\`.`,
      example: 'promotion.jpeg',
    },
  },
};

export const ref = createComponentRef(__filename);
export default disposition;
