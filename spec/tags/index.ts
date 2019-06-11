import { TagObject } from 'openapi3-ts';
import { rawLoad } from '../../utils/raw-load';

const whatsappDescription = rawLoad(__dirname, './whatsapp.md');
const facbookDescription = rawLoad(__dirname, './facebook.md');

const tags: TagObject[] = [{
  name: 'WhatsApp',
  description: whatsappDescription,
}, {
  name: 'Facebook',
  description: facbookDescription,
}];

export default tags;
