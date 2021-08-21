The RCS channel may be used after its activation on the Zenvia Platform.

Get in touch with Zenvia consultants to create your Google agent (an agent is a conversational entity that interacts with users by sending messages and reacting to users' responses).

Webhooks allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).


## Limitations

The RCS channel is compatible only with smartphones Android, from 8.0 version (Oreo).

To enable RCS on an Android device, you can configure it with pre-release versions of the Messages and Carrier Services apps that connect it to an RCS backend.

The use of RCS channel follows the Google content policies, available here: https://developers.google.com/business-communications/rcs-business-messaging/support/tos.


## RCS sender and recipient

When you send a message to a contact using RCS channel:

* Recipient: is the phone number of the contact
* Sender: is the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/rcs/list)

When you receive a message from a contact, the sender and recipient are inverted:

* Recipient: is the agent id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/rcs/list)
* Sender: is the phone number of the contact

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
