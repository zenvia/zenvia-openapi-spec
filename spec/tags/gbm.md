The Google Business Messages channel may be used after its activation on Zenvia platform.

To activate Google Business Messages you need to be registered as a partner with Google Business Messages and get an account information configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**


## Google Business Messages limitations

To be able to send messages to a contact, you first need to setup a webhook, which allows you to receive events in the configured URL. [Learn more here](#tag/Webhooks).


## Google Business Messages sender and recipient

When you receive a message from a contact from Google Business Messages channel:

* Sender: is the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-messages/list)
* Recipient: is the contact id

When you send a message to a contact, the sender and recipient are inverted:

* Recipient: is the contact id
* Sender: is the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-messages/list)

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
