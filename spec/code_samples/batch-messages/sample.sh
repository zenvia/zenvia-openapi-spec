curl "https://api.zenvia.com/v2/message-batches" \
-H "X-API-TOKEN: YOUR_API_TOKEN" \
-F 'batch={
  "name": "My batch name",
  "channel": "sms",
  "columnMapper": {
    "recipient_header_name": "recipient_number_column",
    "name": "recipient_name_column",
    "protocol": "protocol_column"
  },
  "message": {
    "from": "string",
    "contents": [{
      "type": "text",
      "text": "Hello {{name}} your service protocol is number {{protocol}}"
    }]
  }
};type=application/json' \
-F 'contacts=@./contacts.csv;type=text/csv;filename=contacts.csv'
