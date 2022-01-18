curl 'https://api.zenvia.com/v2/files' \
-H 'X-API-TOKEN: YOUR_API_TOKEN' \
-F 'file={
  "mimeType": "image/png",
  "name": "my-image.png"
};type=application/json' \
-F 'content=@./image-source.png'
