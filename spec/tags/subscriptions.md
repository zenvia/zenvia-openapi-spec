Webhooks allow you to receive events in the configured URL. Note that the types of events below and their respective schemas define the payload of the events that will arrive on the registered webhook URL. They **do not** pertain to the creation and management of the webhooks themselves.

The available type of events are:
- [MESSAGE](#section/MESSAGE)
- [MESSAGE_STATUS](#section/MESSAGE_STATUS)
- [CONVERSATION_STATUS](#section/CONVERSATION_STATUS)
- [CONVERSATION_MESSAGE](#section/CONVERSATION_MESSAGE)
- [SUPPORT_EXPERT_AGENT](#section/SUPPORT_EXPERT_AGENT)
- [CONTACT](#section/CONTACT)

## MESSAGE

The event type MESSAGE refers to messages dispatched and/or received in the desired channel.

When you are subscribed to this type of event, your webhook will receive a request with the schema as follows:

<SchemaDefinition schemaRef="#/components/schemas/events.message-event" />

## MESSAGE_STATUS

The event type MESSAGE_STATUS refers to a status update related to a previously sent message.

If you are subscribed to this type of event, your webhook will receive a request with the schema as follows:

<SchemaDefinition schemaRef="#/components/schemas/events.message-status-event" />
<br>

### Code field
The <code>code</code> field may assume the following values:
* **SENT**: the message sent by your business was received by the provider's server
* **REJECTED**: the message sent by your business has failed to be sent to the provider's server
* **DELIVERED**: the message sent by your business was delivered to the user's device
* **NOT_DELIVERED**: the message sent by your business failed to be sent to the user's device. The reason for the failure will be included in the <code>causes</code> field.
* **READ**: the message sent by your business was read by the user. This status might not be sent, since it depends on the channel and the user's device configuration.
* **DELETED**: the message sent by the user was deleted by the user. Support varies according to the channel.
* **CLICKED**: an action item (like a link or a dial action) in the message has been clicked by the user. The payload of item clicked will be included in the <code>causes</code> field. Support varies according to the channel.
* **VERIFIED**: The message sent by your business was delivered, and the device app acknowledged the sender as verified. Support varies according to the channel.
<br><br>

### Description field
The <code>description</code> field is directly tied to the <code>code</code> field, and it may assume the following values:
* *SENT: "**The message has been forwarded to the provider**".*
* *DELIVERED: "**The message has been delivered by the provider**".*
* *READ: "**The message has been read by the recipient**".*
* *REJECTED: "**The message was rejected by the provider**".*
* *NOT_DELIVERED: "**The provider was unable to deliver the message**".*
* *DELETED: "**The message has been deleted by the contact**".*
* *CLICKED: "**An action item in the message has been clicked by the contact**".*
* *VERIFIED: "**The message has been verified by the device app/provider**".*

## CONVERSATION_STATUS

The event type CONVERSATION_STATUS refers to the lifecycle progression of a conversation.

A conversation has a finite lifecycle — it has a beginning, a middle, and an end.

If you are subscribed to this type of event, your webhook will receive a request with the schema as follows:

<SchemaDefinition schemaRef="#/components/schemas/events.conversation-status" />
<br>

## CONVERSATION_MESSAGE

The event type CONVERSATION_MESSAGE refers to individual messages exchanged within a conversation.

It includes both inbound (MO), outbound (MT), and internal messages, all associated with an existing conversation.

If you are subscribed to this type of event, your webhook will receive a request with the schema as follows:

<SchemaDefinition schemaRef="#/components/schemas/events.conversation-message" />
<br>

## SUPPORT_EXPERT_AGENT

The event type SUPPORT_EXPERT_AGENT allows ZCC users to create subscriptions for events generated exclusively by support agents.

Allowing a Support Agent to trigger a previously configured webhook when the agent's conditions are met.

<SchemaDefinition schemaRef="#/components/schemas/events.support-expert-agent" />
<br>

## CONTACT

The event type CONTACT allows ZCC users to create subscriptions for changes in contacts. If a contact is created, updated or deleted, you may subscribe to the event.

If you are subscribed to this type of event, your webhook will receive a request with the schema as follows:

<SchemaDefinition schemaRef="#/components/schemas/events.contact" />


## Zenvia outbound IP addresses

Webhook notifications sent from Zenvia come from any of the following ranges of IP addresses:

* 45.233.20.0/24
* 45.233.22.0/24
* 45.233.23.0/24
* 3.233.231.228/32

## Subscription creation limit

Currently it is possible to create up to two subscriptions with the same criteria (Event Type and Channel).

## Webhook request error handling
As described before, webhooks allow you to receive events in your application.

However, if a webhook request fails, a retry procedure begins. This procedure abides by the following rules
* There will be at least 30 seconds between each request attempt for the same event
* There will be at most 30 request attempts for the same event

This means that a single event may be retried for around 15 minutes. Following this, the event will no longer be available.

Event retries are handled separately from the initial request. This ensures that webhooks without request fails are not penalized by webhooks with many requests fails.
<br/><br/>

### Webhook (quality) status handling
Multiple errors on a single webhook may change its (quality) status. The possible webhook statuses are:
* **ACTIVE**: the initial status for every webhook created
* **DEGRADED**: once some criteria are met, an *ACTIVE* webhook will be demoted to *DEGRADED*.
<br>Event requests for *DEGRADED* webhooks are handled separately from *ACTIVE* webhooks.
<br>This ensures that high-quality webhooks are not penalized by the handling of low-quality webhooks.
* **INACTIVE**: once some other criteria are, a *DEGRADED* webhook will be demoted to *INACTIVE*.
Events no longer will be posted on webhooks with an *INACTIVE* status.

The criteria which trigger status changes consist of the following:
* 1 request timeout is equivalent to 10 regular request fails.
* 10 consecutive regular request fails on an *ACTIVE* webhook will result in demotion to *DEGRADED*.
* 500 consecutive regular request fails will result in demotion to *INACTIVE*.
  * Responses slower than *1 second* also count as a fail and may result in status demotion
    * Only slow responses on the initial request count as a fail
    * Only slow responses on an *ACTIVE* webhook count as a fail.
     <br>Therefore, slow responses should never result in demotion to *INACTIVE*.
  * All connection timeouts count as fail and may result in status demotion.
    <br>The connection timeout is *5 seconds*.
  * All response (read) timeouts count as a fail and may result in status demotion.
    <br>The response timeout is *5 seconds*.
* 50 consecutive successful requests on a *DEGRADED* webhook are necessary for promotion back to *ACTIVE*
  * Successful requests on retry attempts also count toward status promotion
  * Responses slower than *1 second* do not count either as a success or as a fail
* Any manual update done to the webhook URL on the [API console](https://app.zenvia.com/home/api) will automatically
promote a *DEGRADED* webhook back to *ACTIVE*.

Both the success and fail counters automatically reset themselves *8 hours* after the first increment.
<br/><br/>

## Webhook Authentication
Initially, webhooks only support authentication via [OAuth](https://www.oauth.com/), using the [client_credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) grant type exclusively. The required fields for authentication must be provided within the auth object, which is nested inside the webhook object. All fields within auth are used to perform the authentication request. <br>
It's important to ensure the authentication endpoint is always available, as failures or timeouts during this process will be treated the same as failures in the webhook's own requests and may result in equivalent penalties.
<br/><br/>

## Webhook supported channels
The following table shows the content types supported by each channel for the **IN** direction.

For the **OUT** direction, check the [messaging content type table](#section/Supported-Channels).

|Content Type                                       |SMS                                |Facebook                           |WhatsApp                           |RCS                                |Voice                              |Telegram                           |GBM*                               |Instagram                          |E-Mail                             |
|:--------------------------------------------------|:----------------------------------|:----------------------------------|:----------------------------------|:----------------------------------|:----------------------------------|:----------------------------------|:----------------------------------|:----------------------------------|:----------------------------------|
| [text](#section/Text)                             |<font color="green">&#10004;</font>|<font color="green">&#10004;</font>|<font color="green">&#10004;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|<font color="green">&#10004;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|
| [file](#section/File)                             |<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|<font color="green">&#10004;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|<font color="green">&#10004;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|
| [contacts](#section/Contacts)                     |<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|
| [location](#section/Location)                     |<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|
| [email](#section/E-Mail)                          |<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|
| [product_list_order](#section/Product-List-Order) |<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|
| [optin_response](#section/OptIn-Response)         |<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|
| [flow_response](#section/Flow-Response)          |<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="green">&#10004;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|<font color="red"  >&#10005;</font>|

_*GBM stands for Google Business Messages_

## Migrating from v1

Subscriptions created on `https://api.zenvia.com/v1/subscriptions` keep delivering events in the v1 format until they are deleted. To receive events in the v2 format, create a new subscription on `https://api.zenvia.com/v2/subscriptions` with the same `eventType`, `criteria` and `webhook`, then delete the v1 subscription. The same API token works on both versions.

While both subscriptions are active, each one delivers its own copy of every event, with a different event `id`.

### Breaking changes

|Field                                                         |v1                                                                                                           |v2                                                                          |
|:-------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|
|Visitor in `message.contents` (MESSAGE)                       |Sent in `message.visitor` and also as a `json` content: `{"type": "json", "payload": {"visitor": {...}}}`     |Sent only in `message.visitor`. The `json` content is no longer sent        |
|Unmapped contents in `message.contents` (MESSAGE)             |Sent as a `json` content with the raw payload                                                                |Not sent                                                                    |
|`message.id` on SMS replies (MESSAGE)                         |ID of the original message being replied to                                                                  |ID of the message itself. The original message ID is sent in `message.idRef`|
|`messageStatus.causes[].channelErrorCode` (MESSAGE_STATUS)    |Number or string, as sent by the provider                                                                    |Always a string                                                             |
|`messageStatus.causes` without errors (MESSAGE_STATUS)        |`null`                                                                                                       |Not sent                                                                    |
|Connection and response timeouts                              |8 seconds                                                                                                    |5 seconds                                                                   |
|Timeouts on the fail counter                                  |1 timeout counts as 1 fail                                                                                   |1 timeout counts as 10 fails                                                |
|Manual update on the [API console](https://app.zenvia.com/home/api)|Promotes *DEGRADED* and *INACTIVE* webhooks back to *ACTIVE*                                            |Promotes only *DEGRADED* webhooks back to *ACTIVE*                          |

### New fields

|Event          |Field                                                  |Description                                                                                             |
|:--------------|:------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
|MESSAGE        |`message.timestamp`                                    |Message timestamp at the provider                                                                       |
|MESSAGE        |`message.idRef`                                        |ID of the message being replied to                                                                      |
|MESSAGE        |`message.referral`                                     |Ad or post the message originated from                                                                  |
|MESSAGE        |`message.visitor.userName`, `picture`, `whatsapp`      |Additional visitor data                                                                                 |
|MESSAGE_STATUS |`message`                                              |`id`, `externalId`, `contentIndex`, `from`, `to` and `direction` of the message the status refers to    |
|MESSAGE_STATUS |`messageStatus.direction`                              |`IN` or `OUT`                                                                                           |
|MESSAGE_STATUS |`messageStatus.context`, `channelData`, `details`      |Channel-specific data                                                                                   |
|MESSAGE_STATUS |`messageStatus.code`                                   |New values: `DELETED`, `CLICKED`, `VERIFIED`, `ACCEPTED`, `HANG_UP`, `TERMINATED`, `RECORDED`           |

On WhatsApp, contacts identified by BSUID are sent in `from` (IN) or `to` (OUT) with the `BSUID:` prefix instead of a phone number.

### MESSAGE example

v1:

```json
{
  "id": "5e2f8a10-6d3b-4c1e-9a7f-2b8c4d6e8f01",
  "timestamp": "2026-11-13T12:00:00.000Z",
  "type": "MESSAGE",
  "subscriptionId": "0f4e2a6c-1b3d-4e5f-8a9b-7c6d5e4f3a21",
  "channel": "whatsapp",
  "direction": "IN",
  "message": {
    "id": "a41c3b2d-8e7f-4a6b-9c5d-1e2f3a4b5c6d",
    "from": "5511988887777",
    "to": "5511999990000",
    "direction": "IN",
    "channel": "whatsapp",
    "visitor": { "name": "Maria Silva", "firstName": "Maria", "lastName": "Silva" },
    "contents": [
      { "type": "text", "text": "Hi, I want to check my order" },
      { "type": "json", "payload": { "visitor": { "name": "Maria Silva", "firstName": "Maria", "lastName": "Silva" } } }
    ]
  }
}
```

v2:

```json
{
  "id": "5e2f8a10-6d3b-4c1e-9a7f-2b8c4d6e8f01",
  "timestamp": "2026-11-13T12:00:00.000Z",
  "type": "MESSAGE",
  "subscriptionId": "0f4e2a6c-1b3d-4e5f-8a9b-7c6d5e4f3a21",
  "channel": "whatsapp",
  "direction": "IN",
  "message": {
    "id": "a41c3b2d-8e7f-4a6b-9c5d-1e2f3a4b5c6d",
    "from": "5511988887777",
    "to": "5511999990000",
    "direction": "IN",
    "channel": "whatsapp",
    "timestamp": "2026-11-13T11:59:58.000Z",
    "visitor": { "name": "Maria Silva", "firstName": "Maria", "lastName": "Silva", "userName": "Maria" },
    "contents": [
      { "type": "text", "text": "Hi, I want to check my order" }
    ]
  }
}
```

### MESSAGE_STATUS example

v1:

```json
{
  "id": "c7b3a1e0-2f4d-4b6a-8c9e-0d1f2a3b4c5d",
  "timestamp": "2026-11-13T12:00:00.000Z",
  "type": "MESSAGE_STATUS",
  "subscriptionId": "0f4e2a6c-1b3d-4e5f-8a9b-7c6d5e4f3a21",
  "channel": "whatsapp",
  "messageId": "9b1d7e3f-5a2c-4d8b-a6e4-3f2c1b0a9d8e",
  "contentIndex": 0,
  "messageStatus": {
    "timestamp": "2026-11-13T12:00:00.000Z",
    "code": "DELIVERED",
    "description": "The message has been delivered by the provider",
    "causes": null
  }
}
```

v2:

```json
{
  "id": "c7b3a1e0-2f4d-4b6a-8c9e-0d1f2a3b4c5d",
  "timestamp": "2026-11-13T12:00:00.000Z",
  "type": "MESSAGE_STATUS",
  "subscriptionId": "0f4e2a6c-1b3d-4e5f-8a9b-7c6d5e4f3a21",
  "channel": "whatsapp",
  "messageId": "9b1d7e3f-5a2c-4d8b-a6e4-3f2c1b0a9d8e",
  "contentIndex": 0,
  "message": {
    "id": "9b1d7e3f-5a2c-4d8b-a6e4-3f2c1b0a9d8e",
    "externalId": "order-123",
    "from": "5511999990000",
    "to": "5511988887777",
    "contentIndex": 0,
    "direction": "OUT"
  },
  "messageStatus": {
    "timestamp": "2026-11-13T12:00:00.000Z",
    "code": "DELIVERED",
    "description": "The message has been delivered by the provider",
    "direction": "OUT"
  }
}
```
