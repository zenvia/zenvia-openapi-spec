The RCS channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials/rcs/list).

**Get in touch with Zenvia consultants to create your Google agent (a conversational entity that interacts with users by sending messages and reacting to users' responses).**

Webhooks allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).

## Introduction to RCS messaging

_Rich Communcation Services_, or RCS for short, is a messaging protocol similar to SMS, where it's used by telecommunications providers as a standard of messaging. In practical terms, the messaging process is similar to SMS:


![RCS messaging diagram](/assets/rcs/rcs-messaging-diagram.png)


Unlike the traditional text messaging format (SMS), RCS significantly introduces a range of dynamic features. Suggested actions and replies enable users to engage in conversations more efficiently, offering contextually relevant options based on the message content. With the integration of cards and carousels, users can share interactive content, such as location maps, images, and links, seamlessly within the chat interface. The protocol also supports read receipts, delivery receipts, and typing indicators, providing users with real-time visibility into the status of their messages. 

Check out visually how these RCS features look [here](#section/RCS-features).

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


## RCS features 

* Add a sentence introducing this section.
* Four sections ### separating file, replyable_text, card and carrousel. Each section will talk about specific point, like card being a calendar or a simple button.

