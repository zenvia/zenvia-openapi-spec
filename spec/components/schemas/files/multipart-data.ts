// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'File object',
  description: 'This is a file object model.',
  type: 'object',
  properties: {
    mimeType: {
      title: 'Mime Type',
      description: 'Mime type of the file. When not provided, it will be determined based either on the header *Content-Type* or the file name *extension*.',
      type: 'string',
      example: 'video/mp4',
    },
    name: {
      title: 'Name',
      description: 'Name of the file. When not provided, it will be obtained from based either on the header *Content-Disposition* or the URL last path.',
      type: 'string',
      example: 'my-video.mp4',
    },
    tag: {
      title: 'Tag',
      description: 'Tag may later be used to filter file list requests.',
      type: 'string',
      example: 'My-Tag',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
