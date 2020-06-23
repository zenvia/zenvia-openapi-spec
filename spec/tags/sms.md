The SMS channel can be used after your activation on Zenvia platform.

## Message sender and recipient

When you send some message for one contact using SMS channel:

* Recipient: is the phone number of contact
* Sender: is the SMS sender id

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient: is the SMS sender id
* Sender: is the phone number of contact

In API the sender is the field `from` and the receiver is the field `to` of message object.