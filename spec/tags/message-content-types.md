## About Channels

Sending messages through channels is quite similar, with a few differences between them.

### SMS

The SMS channel can be used after your activation on Zenvia platform.

### WhatsApp

The WhatsApp channel can be used after your activation on Zenvia platform.

To activate WhatsApp you a need a registered number on WhatsApp Business API and account informations configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**

### Facebook

The Facebook channel can be used after that you add Facebook Pages on Zenvia platform.

## Message content types
WhatsApp support a few types of contents, which we categorize into to groups: standard contents, and notification contents.
<br><br>

### Standard contents
This kind of message content may only be sent as a reply to a message sent by the user. So these kind of message content cannot be sent to start a interaction with an user. And even as a reply, these kind of message contents can only be sent if the last message from the user was sent less than 24 hours ago.

#### Text content
This type of content is the most used type of content, and its composed of a plain text.

This type is applicable to `SMS`, `WhatsApp` and `Facebook` channels.

#### File content
This is used to send a file to the user. The file will be presented to the user in different manner based on the file type. There are four types of presentation:
* Image
* Video
* Audio
* Document

This type is applicable to `WhatsApp` and `Facebook` channels.

#### Contacts content
Use this type of content to send contacts information to the user.

This type is only applicable to `WhatsApp` channel.

#### Location content
This content is used to send location messages representing a point on the map to the user.

This type is only applicable to `WhatsApp` channel.

### Notification contents
These types of contents are special, because they are allowed to be sent without any user interaction and also even if the last user message was sent more than 24 hours ago.

However, it is not allowed to send these these types of contents without some kind of opt-in from the user. This is a business restriction, not a technical one.

#### Template content
Template contents have a fixed text content, with a few variables placed where necessary. This type of content must be submitted for approval to WhatsApp. The nature of the content that is subjected to approval is very limited.

This type is only applicable to `WhatsApp` channel.

##### Submitting a template content for approval
If you already have a WhatsApp business account with us, just send email to *whatsapp@zenvia.com* and we will start the process for you.

## Message sender and recipient

When you send some message for one contact using SMS, WhatsApp or Facebook channel:

* Recipient:
  * SMS: is the phone number of contact
  * WhatsApp: is the phone number of contact
  * Facebook: is the user id on your page (PSID - page scoped id)
* Sender:
  * SMS: is the SMS sender id
  * WhatsApp: is the WhatsApp sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)
  * Facebook: is your page id

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient:
  * SMS: is the SMS sender id
  * WhatsApp: is the WhatsApp sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)
  * Facebook: is your page id
* Sender:
  * SMS: is the phone number of contact
  * WhatsApp: is the phone number of contact
  * Facebook: is the user id on your page (PSID - page scoped id)

In API the sender is the field `from` and the receiver is the field `to` of message object.