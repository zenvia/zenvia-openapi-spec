The RCS channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials/rcs/list).

**Get in touch with Zenvia consultants to create your Google agent (a conversational entity that interacts with users by sending messages and reacting to users' responses).**

Webhooks allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).

## Introduction to RCS messaging

_Rich Communcation Services_, or RCS for short, is a messaging protocol similar to SMS, where it's used by telecommunications providers as a standard of messaging. In practical terms, the messaging process is similar to SMS:


![RCS messaging diagram](/assets/rcs/rcs-messaging-diagram.png)


Unlike the traditional text messaging format (SMS), RCS significantly introduces a range of dynamic features. Suggested actions and replies enable users to engage in conversations more efficiently, offering contextually relevant options based on the message content. With the integration of cards and carousels, users can share interactive content, such as location maps, images, and links, seamlessly within the chat interface. The protocol also supports read receipts, delivery receipts, and typing indicators, providing users with real-time visibility into the status of their messages. 

Check out visually how these RCS features look [here](#section/RCS-features).

## RCS limitations

The RCS channel is compatible only with Android smartphones with 8.0 version (Oreo) or above. Most Android devices already come with RCS enabled.

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

### RCS Verfied Senders

RCS business messaging (or RBM for short) allows a business with a Google-provided RBM agent to send RCS messages to mobile end-users. This agent is associated with branding and business information, such as a logo, description, webistes, brand name, and more.
The *Verified Sender Badge* of your brand tells mobile end-users that they can trust that sender given Google's clearance. Along with the badge, there are some additional features that an RBM agent can send to a mobile end-user in comparison to traditional text messaging.

![RCS verified badge example](/assets/rcs/rcs-features-verified-sender.png)

### RCS Events Receipts
Within RCS, both agents and users can send and receive delivery receipts, read receipts, typing indicators and clicked receipts. These *Events* are automaticallys sent to the RBM agent, while 

### RCS Suggested Actions and (replies here? or text? Want to let replyable_text and the remaining RCS content here)

### RCS Rich Cards

### RCS Rich Card Carrousel


* Add a sentence introducing this section.
* Four sections ### separating file, replyable_text, card and carrousel. Each section will talk about specific point, like card being a calendar or a simple button.
https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/what-can-rbm-do
