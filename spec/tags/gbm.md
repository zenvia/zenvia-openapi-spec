The Google Business Message channel may be used after its activation on Zenvia platform.

To activate Google Business Message you need to be registered as a partner with Google Business Message and get an account information configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**


## Limitations

To be able to send messages to a contact, you first need to setup a webhook, which allows you to receive events in the configured URL. [Learn more here](#tag/Webhooks).


## Google Business Message sender and recipient

When you receive a message from a contact from Google Business Message channel:

* Sender: is the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-message/list)
* Recipient: is the contact id

When you send a message to a contact, the sender and recipient are inverted:

* Recipient: is the contact id
* Sender: is the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-message/list)

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
