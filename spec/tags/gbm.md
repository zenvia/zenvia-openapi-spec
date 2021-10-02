The Google Business Messages channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-messages/list).

To activate Google Business Messages you need to be registered as a partner with Google Business Messages and get an account information configured on Zenvia platform.

**Get in touch with Zenvia consultants to create your account.**


## Google Business Messages limitations

To be able to send messages to a contact, you first need to setup a webhook, which allows you to receive events in the configured URL. [Learn more here](#tag/Webhooks).


## Google Business Messages sender and recipient

When you receive a message from a contact from Google Business Messages channel:

* Sender: the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-messages/list)
* Recipient: the contact id

When you send a message to a contact, the sender and recipient are inverted:

* Recipient: the contact id
* Sender: the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-messages/list)

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
