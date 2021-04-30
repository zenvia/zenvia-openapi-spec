curl "https://api.zenvia.com/v2/channels/gbm/messages" \
-H "Content-Type: application/json" \
-H "X-API-TOKEN: YOUR_API_TOKEN" \
-d '{
  "from": "sender-identifier",
  "to": "recipient-identifier",
  "contents": [{
    "type": "text",
    "text": "Some text message"
  }]
}'
