The Facebook channel may be used after you connect a Facebook page on [Zenvia platform](https://app.zenvia.com/home/credentials/facebook/list).


## Facebook limitations

To be able to send messages to a contact, you first need to setup a webhook, which will allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).


## Facebook sender and recipient

When you receive a message from a contact from Facebook channel:

* Recipient: your Facebook page id
* Sender: the contact id on your Facebook page (PSID - page scoped id)

When you send some message to a contact, the sender and recipient are inverted:

* Recipient: the contact id on your Facebook page (PSID - page scoped id)
* Sender: your Facebook page id

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
