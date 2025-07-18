Webhooks allow you to receive events in the configured URL. The available type of events are **MESSAGE** and **MESSAGE_STATUS**.

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

<<<<<<< HEAD
<<<<<<< HEAD
## CONVERSATION_STATUS

The event type CONVERSATION_STATUS refers to the lifecycle progression of a conversation.
=======
## CONVERSION_EVENT

The event type CONVERSATION_EVENT refers to the lifecycle progression of a conversation.

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

_*GBM stands for Google Business Messages_
