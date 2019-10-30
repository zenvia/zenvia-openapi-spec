The WhatsApp channel can be used after your activation on Zenvia platform.

To activate WhatsApp you a need a registered number on WhatsApp Business API and account informations configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**


## Limitations

The WhatsApp API has some limitations:

* To start a conversation with someone you need a special type of message (a template message) and an approval before being used.

Supported content types and sizes:

| Media | Content Type | Size |
|---|---|---|
| document | Any valid MIME type. | 100 MB |
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


## Type of Messages

* **Template Message**

**What's the template message?**

Message Templates are message formats for common reusable messages a business may want to send. Businesses must use Message Templates for sending notifications to customers.

This allows a business to send just the template identifier along with the appropriate parameters instead of the full message content.

Font: <a href="https://developers.facebook.com/docs/whatsapp/message-templates/">WhatsApp</a>

**How can I purchase a new template of WhatsApp?**

If you already have a WhatsApp business account just send email to *whatsapp@zenvia.com*

* **Session Message**

**What's session message and how it works?**

Whenever the end user responds a 24 hour session window is opened within whatsapp, any message trafficked within this period is considered a session message, so any kind of message (text, photo, video) are considered session message within the window. The 24-hour window only opens when the end user contacts you. Only messages trafficked (sent and received) will be billed.
