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
    autoDeleteMinutes: {
      title: 'Auto Delete Minutes',
      default: null,
      description: `Amount of minutes after which the file will be automatically deleted.
                    <br>The default value, \`null\`, means the file will be kept until manually deleted.`,
      type: 'string',
      example: 1440,
      writeOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
