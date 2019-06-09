The Facebook channel can be used after that you add Facebook Pages on Zenvia platform.

## Message sender and recipient

When you send some message for one contact using Facebook channel:

* Recipient: is the user id on your page (PSID - page scoped id)
* Sender: is your page id

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient: is your page id
* Sender: is the user id on your page (PSID - page scoped id)

In API the sender is the field `from` and the receiver is the field `to` of message object.
