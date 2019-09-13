Subscriptions allow you to receive events in configured webhooks. The available type of events are **MESSAGE** and **MESSAGE_STATUS**:

## MESSAGE

The event type MESSAGE refers to messages dispatched and/or received in the desired channel.

When you are subscribed in this type of event, your webhook will receive a request with the schema as follows:

```json
{
  "id": "string",
  "timestamp": "string", 
  "type": "MESSAGE",
  "subscriptionId": "string",
  "channel": "string",
  "direction": "string",
  "message": {
    "id": "string",
    "from": "string",
    "to": "string",
    "direction": "string",
    "channel": "string",
    "contents": [
      {
        "type": "string",
        "text": "string"
      }
    ]    
  }
}
```

The <code>direction</code> field, that indicates if the message is received from a channel or sent to a channel, may assume the following values: IN or OUT.

## MESSAGE_STATUS

The event type MESSAGE_STATUS refers to a status update related to a prior sent message.

If you are subscribed in this type of event, your webhook will receive a request with the schema as follows:

```json
{
  "id": "string",
  "timestamp": "string", 
  "type": "MESSAGE",
  "subscriptionId": "string",
  "channel": "string",
  "messageId": "string",
  "contentIndex": "number",
  "messageStatus": {
    "timestamp": "string",
    "code": "string",
    "description": "string",
    "cause": "string"
  }
}
```

The <code>code</code> field may assume the following values: REJECTED, SENT, DELIVERED, NOT_DELIVERED or READ, being the last one dependant of channel and user device configuration.