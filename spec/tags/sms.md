The SMS channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials).

## ZenAPI vs SMS API
ZenAPI allows you to use multiple channels. However, if you are interested in just
the SMS channel, you may access the old API, which for now, have more
SMS features.

For more information about it, visit: [SMS API documentation](https://zenviasmsenus.docs.apiary.io/#).

## SMS sender and recipient
When you send some message for one contact using SMS channel:

* Recipient: is the phone number of contact
* Sender: is the SMS sender id

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient: is the SMS sender id
* Sender: is the phone number of contact

In API the sender is the field `from` and the receiver is the field `to` of message object.