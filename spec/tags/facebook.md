The Facebook channel may be used after you connect a Facebook Page on [Zenvia platform](https://app.zenvia.com/home/credentials/facebook/list).


## Limitations

To be able to send messages to a contact, you first need to setup a webhook, which allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).


## Facebook sender and recipient

When you receive a message from a contact from Facebook channel:

* Recipient: is your page id
* Sender: is the contact id on your page (PSID - page scoped id)

When you send some message to a contact, the sender and recipient are inverted:

* Recipient: is the contact id on your page (PSID - page scoped id)
* Sender: is your page id

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
