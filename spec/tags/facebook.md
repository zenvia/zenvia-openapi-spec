The Facebook channel may be used after you connect a Facebook Page on [Zenvia platform](https://app.zenvia.com/home/credentials).

## Facebook sender and recipient

When you send some message for one contact using Facebook channel:

* Recipient: is the user id on your page (PSID - page scoped id)
* Sender: is your page id

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient: is your page id
* Sender: is the user id on your page (PSID - page scoped id)

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
