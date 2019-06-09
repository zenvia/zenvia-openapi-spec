curl \
-H"Content-Type: application/json" \
-H"Authorization: Bearer ${JWT}" \
"https://api.zenvia.com/v1/channels/whatsapp/messages" \
-d'{
  "from": "dbbe8448-87f3-11e9-9aa0-9fad6fe01493",
  "to": "5511999999999",
  "contents": [{
    "type": "text",
    "text": "Hello world!"
  }]
}'
