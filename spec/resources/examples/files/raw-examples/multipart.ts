import { ExampleObject } from 'openapi3-ts';

const example: ExampleObject = {
  description: 'Content-Type: multipart/form-data; boundary=3bb873df66f5202e15d4b3b9a7eff',
  value: `--3bb873df66f5202e15d4b3b9a7eff\r
Content-Disposition: form-data; name="file"\r
Content-Type: application/json\r
\r
{
  "mimeType": "image/png",
  "name": "my-image.png"
}\r
--3bb873df66f5202e15d4b3b9a7eff\r
Content-Disposition: form-data; name="content"; filename="original-name.png"\r
Content-Type: image/png\r
\r
BINARY-CONTENT\r
--3bb873df66f5202e15d4b3b9a7eff--\r
\r
`,
};

export default example;
