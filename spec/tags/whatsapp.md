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

Message templates are common reusable message formats that may be sent by a company. Companies should use message templates to send notifications to customers.

This allows a company to send only the template identifier along with the appropriate parameters, rather than all of the message content.


**How can purchase a new template of whatsapp?**

If you already have a whatsapp business account just send email to: *whatsapp@zenvia.com*

* **Session Message**

**What's session message and how it works?**

WhatsApp Session messages are any messages sent and received in response to a user-initiated message to your application. A messaging session starts when a user sends your application a message and lasts for 24 hours from the most recently received message. You can wait for users to message your app, or you can send a Template Message to invite the user to respond. 
Billing is for messages trafficked (sent and received).
