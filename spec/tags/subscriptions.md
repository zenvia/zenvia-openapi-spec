Webhook allow you to receive events in configured webhooks. The available type of events are **MESSAGE** and **MESSAGE_STATUS**:

## MESSAGE

The event type MESSAGE refers to messages dispatched and/or received in the desired channel.

When you are subscribed in this type of event, your webhook will receive a request with the schema as follows:

<SchemaDefinition schemaRef="#/components/schemas/events.message-event" />

The <code>direction</code> field, that indicates if the message is received from a channel or sent to a channel, may assume the following values: IN or OUT.

## MESSAGE_STATUS

The event type MESSAGE_STATUS refers to a status update related to a prior sent message.

If you are subscribed in this type of event, your webhook will receive a request with the schema as follows:

<SchemaDefinition schemaRef="#/components/schemas/events.message-status-event" />
<br>

### Code field
The <code>code</code> field may assume the following values:
* **SENT**: The message sent by your business was received by the provider's server.
* **REJECTED**: The message sent by your business failed to be sent to the provider's server.
* **DELIVERED**: The message sent by your business was delivered to the user's device.
* **NOT_DELIVERED**: The message sent by your business failed to be sent to the user's device. The reason for the failure will be included in the <code>causes</code> field.
* **READ**: The message sent by your business was read by the user. This status might not be sent, since it depends on the channel and on the user's device configuration.
<br><br>

### Description field
The <code>description</code> field is directly tied to the <code>code</code> field, and it may assume the following values:
* *SENT: "**The message has been forwarded to the provider**".*
* *DELIVERED: "**The message has been delivered by the provider**".*
* *READ: "**The message has been read by the recipient**".*
* *REJECTED: "**The message was rejected by the provider**".*
* *NOT_DELIVERED: "**The provider was unable to deliver the message**".*
