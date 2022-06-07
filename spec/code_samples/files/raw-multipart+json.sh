curl 'https://api.zenvia.com/v2/files' \
-H 'X-API-TOKEN: YOUR_API_TOKEN' \
-H 'Content-Type: multipart/form-data; boundary=3bb873df66f5202e15d4b3b9a7eff' \
--data-binary "`echo -e '--3bb873df66f5202e15d4b3b9a7eff\r
Content-Disposition: form-data; name="file"\r
Content-Type: application/json\r
\r
{
  "mimeType": "text/plain",
  "name": "my-text.txt"
}\r
--3bb873df66f5202e15d4b3b9a7eff\r
Content-Disposition: form-data; name="content"; filename="original-name.txt"\r
Content-Type: text/plain\r
\r
BINARY-CONTENT\r
--3bb873df66f5202e15d4b3b9a7eff--\r
'`"
