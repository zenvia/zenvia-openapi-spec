The WhatsApp channel may be used after its activation on Zenvia platform.

To activate WhatsApp you a need a registered number on WhatsApp Business API and account information configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**

Webhooks allow you to receive events in the configured URL. [Learn more here.](#tag/Webhooks)


## Limitations

The WhatsApp API has some limitations:

* To start a conversation with someone you need a special type of message ([a template message](#section/Template)), which needs an approval before being used.

* Messages not being as template content type, can only be delivered on the 24 hours after the last sent message by the client to the company.

Supported content types and sizes:

| Media | Content Type | Size |
|---|---|---|
| document | Any valid MIME type. | 100&nbsp;MB |
| image | image/jpeg<br>image/png | 5 MB |
| sticker | image/webp | 100 KB |
| audio | audio/acc<br>audio/mp4<br>audio/amr<br>audio/mpeg<br>audio/ogg; codecs=opus | 16 MB |
| video | video/mp4<br>video/3gpp<br>**Note:** Only H.264 video codec and AAC audio codec is supported. | 16 MB |

## WhatsApp sender and recipient

When you send some message for one contact using WhatsApp channel:

* Recipient: is the phone number of contact
* Sender: is the WhatsApp sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)

When you receive a message from one contact, the sender and recipient are inverted:

* Recipient: is the WhatsApp sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)
* Sender: is the phone number of contact

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.