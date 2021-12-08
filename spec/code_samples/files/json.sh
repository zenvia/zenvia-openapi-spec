curl 'https://api.zenvia.com/v2/files' \
-H 'X-API-TOKEN: YOUR_API_TOKEN' \
-H 'Content-Type: application/json' \
-d '{
  "sourceUrl": "https://zenvia.com/example",
  "sourceHeaders": {
    "Authorization": "Basic dXNlcjpwd2Q=",
    "X-Custom-Token": "TOKEN"
  },
  "mimeType": "image/png",
  "name": "my-image.png"
}' \
