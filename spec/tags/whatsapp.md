The WhatsApp channel can be used after your activation on Zenvia platform.

To activate WhatsApp you a need a registered number on WhatsApp Business API and account informations configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**


## Limitations

The WhatsApp API has some limitations:

* To start a conversation with someone you need a special type of message ([a template message](#notification-contents)), which needs an approval before being used.

Supported content types and sizes:

| Media | Content Type | Size |
|---|---|---|
| document | Any valid MIME type. | 100&nbsp;MB |
| image | image/jpeg<br>image/png | 5 MB |
| audio | audio/acc<br>audio/mp4<br>audio/amr<br>audio/mpeg<br>audio/ogg; codecs=opus | 16 MB |
| video | video/mp4<br>video/3gpp<br>**Note:** Only H.264 video codec and AAC audio codec is supported. | 16 MB |


## Message sender and recipient

When you send some message for one contact using WhatsApp channel:

* Recipient: is the phone number of contact
* Sender: is the WhatsApp sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient: is the WhatsApp sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)
* Sender: is the phone number of contact

In API the sender is the field `from` and the receiver is the field `to` of message object.


## Message content types
WhatsApp support a few types of contents, which we categorize into to groups: standard contents, and notification contents.
<br><br>

### Standard contents
This kind of message content may only be sent as a reply to a message sent by the user. So these kind of message content cannot be sent to start a interaction with an user. And even as a reply, these kind of message contents can only be sent if the last message from the user was sent less than 24 hours ago.

#### Text content
This type of content is the most used type of content, and its composed of a plain text.

#### File content
This is used to send a file to the user. The file will be presented to the user in different manner based on the file type. There are four types of presentation:
* Image
* Video
* Audio
* Document
<br><br>

### Notification contents
These types of contents are special, because they are allowed to be sent without any user interaction and also even if the last user message was sent more than 24 hours ago.

However, it is not allowed to send these these types of contents without some kind of opt-in from the user. This is a business restriction, not a technical one.

#### Template content
Template contents have a fixed text content, with a few variables placed where necessary. This type of content must be submitted for approval to WhatsApp. The nature of the content that is subjected to approval is very limited.

##### Submitting a template content for approval
If you already have a WhatsApp business account with us, just send email to *whatsapp@zenvia.com* and we will start the process for you.
