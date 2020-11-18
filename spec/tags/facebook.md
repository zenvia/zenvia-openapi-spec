The Facebook channel may be used after you connect a Facebook Page on [Zenvia platform](https://app.zenvia.com/home/credentials).

## Facebook sender and recipient

When you send some message for one contact using Facebook channel:

* Recipient: is the user id on your page (PSID - page scoped id)
* Sender: is your page id

When you receive a message from one contact, the sender and recipient are inverted:

* Recipient: is your page id
* Sender: is the user id on your page (PSID - page scoped id)

In API the sender is the field `from` and the receiver is the field `to` of message object.
