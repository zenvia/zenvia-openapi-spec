The SMS channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials).

## ZenAPI vs SMS API
This API allows you to use other channels beyond SMS.

However, if you are interested in just the SMS channel, or you need a feature still
unavailable on this API, you may want to use the previous [SMS API](https://zenviasmsenus.docs.apiary.io/#).

The SMS API is officially supported, but it *might* be discontinued one day.

## SMS sender and recipient
When you send some message for one contact using SMS channel:

* Recipient: is the phone number of contact
* Sender: is the SMS sender id

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient: is the SMS sender id
* Sender: is the phone number of contact

In API the sender is the field `from` and the receiver is the field `to` of message object.