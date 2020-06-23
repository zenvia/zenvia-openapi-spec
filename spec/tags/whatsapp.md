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


## WhatsApp sender and recipient

When you send some message for one contact using WhatsApp channel:

* Recipient: is the phone number of contact
* Sender: is the WhatsApp sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient: is the WhatsApp sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)
* Sender: is the phone number of contact

In API the sender is the field `from` and the receiver is the field `to` of message object.