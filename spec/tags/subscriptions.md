Webhooks allow you to receive events in the configured URL. The available type of events are **MESSAGE** and **MESSAGE_STATUS**:

## MESSAGE

The event type MESSAGE refers to messages dispatched and/or received in the desired channel.

When you are subscribed in this type of event, your webhook will receive a request with the schema as follows:

<SchemaDefinition schemaRef="#/components/schemas/events.message-event" />

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
* **DELETED**: The message sent by the user was deleted by the user.
<br><br>

### Description field
The <code>description</code> field is directly tied to the <code>code</code> field, and it may assume the following values:
* *SENT: "**The message has been forwarded to the provider**".*
* *DELIVERED: "**The message has been delivered by the provider**".*
* *READ: "**The message has been read by the recipient**".*
* *REJECTED: "**The message was rejected by the provider**".*
* *NOT_DELIVERED: "**The provider was unable to deliver the message**".*
* *DELETED: "**The message has been deleted by the contact**".*


## Zenvia outbound IP addresses

Webhook notifications sent from Zenvia come from any of the following ranges of IP addresses:

* 45.233.20.0/24
* 45.233.22.0/24
* 45.233.23.0/24
* 3.233.231.228/32

## Webhook request error handling
As described before, webhooks allow you to receive events in your application.

However, if a webhook request fails, a retry procedure begins. This procedure consists of the following rules:
* There will be at least 30 seconds between each request attempt for the same event.
* There will be at most 30 request attempts for the same event.

This means a single event may be retried for around 15 minutes. After this the event will no longer be available.

Event retries are handled separately from the initial request. This ensures webhooks without request fails are not penalized by webhooks with many request fails.
<br/><br/>

### Webhook (quality) status handling
Multiple errors on a single webhook may change its (quality) status. The possible webhook statuses are:
* **ACTIVE**: This is the initial status for every webhook created.
* **DEGRADED**: After a set of rules is met, an *ACTIVE* webhook will be demoted to *DEGRADED*.
<br>Event requests for *DEGRADED* webhooks are handled separately from *ACTIVE* webhooks.
<br>This is to ensure high quality webhooks are not penalized by the handling of low quality webhooks.
* **INACTIVE**: After another set of rules is met, a *DEGRADED* webhook will be demoted to *INACTIVE*.
Events no longer will be posted on webhooks with *INACTIVE* status.

The rules which trigger status changes are the following:
* 10 consecutive request fails on an *ACTIVE* webhook will result in demotion to *DEGRADED*.
* 500 consecutive request fails will result in demotion to *INACTIVE*.
  * Responses slower than *1 second* also count as a fail and may result in status demotion.
    * Only slow responses on the initial request count as a fail.
    * Only slow responses on an *ACTIVE* webhook count as a fail.
     <br>Therefore, slow responses should never result in demotion to *INACTIVE*.
  * All connection timeouts count as fail and may result in status demotion.
    <br>The connection timeout is *8 seconds*.
  * All response (read) timeouts count as fail and may result in status demotion.
    <br>The response timeout is *8 seconds*.
* 50 consecutives successful requests on a *DEGRADED* webhook are necessary for a promotion back to *ACTIVE*.
  * Successful requests on retry atempts also count toward status promotion.
  * Responses slower than *1 second* do not count either as a success or as a fail.
* Any manual update done to the webhook on the [API console](https://app.zenvia.com/home/api) will automatically
promote either a *DEGRADED* or an *INACTIVE* webhook back to *ACTIVE*.

Both the success and fail counters automatically reset themselves *8 hours* after the first increment.
