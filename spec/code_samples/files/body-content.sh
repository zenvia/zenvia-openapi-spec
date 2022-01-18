curl 'https://api.zenvia.com/v2/files' \
-H 'X-API-TOKEN: YOUR_API_TOKEN' \
-H 'Content-Type: image/png' \
-H 'Content-Disposition: inline;filename=my-image.png' \
--data-binary '@./image-source.png'
