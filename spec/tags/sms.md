The SMS channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials).
<br/>

**Get in touch with Zenvia consultants to create your account.**

Webhooks allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).

## SMS sender and recipient

When you send a message to a contact using SMS channel:

* Recipient: the complete phone number (including country code) of the contact.
* Sender: the SMS account alias connected on [Zenvia platform](https://app.zenvia.com/home/credentials).

When you receive a message from a contact, the sender and recipient are inverted:

* Recipient: the SMS account alias connected on [Zenvia platform](https://app.zenvia.com/home/credentials).
* Sender: the complete phone number (including country code) of the contact.

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
