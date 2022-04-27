import { ExampleObject } from 'openapi3-ts';

const example: ExampleObject = {
  description: 'Content-Type: multipart/form-data; boundary=3bb873df66f5202e15d4b3b9a7eff',
  value: `--3bb873df66f5202e15d4b3b9a7eff
Content-Disposition: form-data; name="file"
Content-Type: application/json

{
  "mimeType": "image/png",
  "name": "my-image.png"
}
--3bb873df66f5202e15d4b3b9a7eff
Content-Disposition: form-data; name="content"; filename="original-name.png"
Content-Type: image/png

BINARY-CONTENT
--3bb873df66f5202e15d4b3b9a7eff

`,
};

export default example;
