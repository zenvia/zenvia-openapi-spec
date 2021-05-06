The Google Business Message channel may be used after its activation on Zenvia platform.

To activate Google Business Message you need to be registered as a partner with Google Business Message and get an account information configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**

Webhooks allow you to receive events in the configured URL. [Learn more here.](#tag/Webhooks)

## Google Business Message sender and recipient

When you send some message for one contact using Google Business Message channel:

* Recipient: is the contact id
* Sender: is the Google Business Message agent ID configured on [Google Business Message](https://developers.google.com) and on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-message/list)

When you receive a message from one contact, the sender and recipient are inverted:

* Sender: is the Google Business Message agent ID configured on [Google Business Message](https://developers.google.com) and on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-message/list)
* Recipient: is the contact id

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
