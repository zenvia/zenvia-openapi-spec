The RCS channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials/rcs/list).

**Get in touch with Zenvia consultants to create your Google agent (a conversational entity that interacts with users by sending messages and reacting to users' responses).**

Webhooks allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).

## Introduction to RCS messaging

_Rich Communcation Services_, or RCS for short, is a messaging protocol similar to SMS, where it's used by telecommunications providers as a standard of messaging. In practical terms, the messaging process is similar to SMS:


![RCS messaging diagram](https://zenvia.chat/storage/files/3c7024318b63bcedac0a28412fd426ce73dcdeade2ea632e3c8016031d08066e.bin)


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

![RCS Verified Badge example](https://zenvia.chat/storage/files/8c4484d81dda6c21f1a7d59aa492c27da6e059c3334a961133b8f5947c50066c.bin)

### RCS Events Receipts
RCS enables instantaneous interaction through real-time event handling. Agents and users exchange delivery receipts, read receipts, and typing indicators, ensuring prompt acknowledgment and response tracking. User activities automatically trigger events, while agents can actively send updates, keeping users informed about message acknowledgment and response progress. This real-time engagement elevates the responsiveness and overall user experience within RCS conversations.

### RCS Suggested Actions and Suggested Replies
Within RCS, diverse messaging formats contribute to a rich and adaptable communication landscape. From conventional text messages to multimedia-rich content like images and videos, RCS caters to a variety of communication needs. Suggested replies, suggested actions, and interactive suggestion chip lists further enhance the conversational experience. These versatile messaging formats provide the flexibility needed to craft engaging and natural conversations.

![RCS Suggested Actions and Suggested Replies](https://zenvia.chat/storage/files/2d4019f78db49bb4a0b49439abf6866a179a37f20ba8e4e51d5ba5bfaa78d96e.bin)

We've separated the specific attributes of Rich Cards and Carousels in distinct sections below, highlighting their unique functionalities and how they add to the overall versatility of RCS messaging.

### RCS Rich Cards
Rich Cards in RCS provide a straightforward way to convey information, media, or suggestions in a unified format. These cards, which can be presented individually or in a carousel, offer a practical means of sharing content. With the ability to include various elements such as media, text, and interactive options, Rich Cards serve as a functional tool for delivering diverse content without unnecessary complexity.

![RCS Rich Cards](https://zenvia.chat/storage/files/7e8f527fcfeb02746a63fcb4f2afbe0aff1327a152cca7544e9ab12427c96b31.bin)

### RCS Carousel

Carousels in RCS offer a dynamic way to present a sequence of rich cards, enhancing the user experience with visual appeal. Each card within the carousel can be customized to display different content, providing a simple and interactive method for sharing information. Carousels are designed for practicality, offering a user-friendly approach to conveying a series of related messages or content pieces.

![RCS Carousel](https://zenvia.chat/storage/files/e0449c0659c99c6c7ae51e8f3b020b8bab15a035956217a1251ed306508649ea.bin)
