The RCS channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials/rcs/list).

**Get in touch with Zenvia consultants to create your Google agent (a conversational entity that interacts with users by sending messages and reacting to users' responses).**

Webhooks allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).


## RCS limitations

The RCS channel is compatible only with Android smartphones with 8.0 version (Oreo) or above.

To enable RCS on an Android device, you can configure it with pre-release versions of the Messages and Carrier Services apps that connect it to an RCS backend.

The use of RCS channel follows Google's content policies, available through this link: https://developers.google.com/business-communications/rcs-business-messaging/support/tos.


## RCS sender and recipient

When you send a message to a contact using RCS channel:

* Recipient: the phone number of the contact
* Sender: the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/rcs/list)

When you receive a message from a contact, the sender and recipient are inverted:

* Recipient: the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/rcs/list)
* Sender: the phone number of the contact

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
