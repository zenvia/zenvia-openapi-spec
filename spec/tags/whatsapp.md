The WhatsApp channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list).

To activate WhatsApp you a need a registered number on WhatsApp Business API and an account enabled on Zenvia platform.

**Get in touch with Zenvia consultants to create your account.**

Webhooks allow you to receive events in the configured URL. [Learn more here.](#tag/Webhooks)


## WhatsApp limitations

The WhatsApp API has some limitations:

* To start a conversation with someone you need a specific type of message caled [a template message](#section/Template), which requires approval before being used.

* Messages not being as template content type, can only be delivered inside a 24-hour window since the last sent message by the client to the company.

* When sending PNG images with a **transparent background**, you can get an unexpected final result due to the image processing performed by WhatsApp in order to convert the image to JPEG.

<br>
Supported content types and sizes:

| Media | Content Type | Post-Processing Media Size* |
|---|---|---|
| document | Any valid MIME type. | 100&nbsp;MB |
| image | image/jpeg<br>image/png | 5 MB |
| sticker | image/webp<br>**Note:** Animated sticker is not supported.  | 100 KB |
| audio | audio/acc<br>audio/mp4<br>audio/amr<br>audio/mpeg<br>audio/ogg; codecs=opus<br>**Note:** The base audio/ogg type is not supported. | 16 MB |
| video | video/mp4<br>video/3gpp<br>**Notes:** <ul><li>Only H.264 video codec and AAC audio codec is supported.</li><li>Only videos with a single audio stream are supported.</li></ul> | 16 MB |

*The size of the media file after encryption. The maximum file size for media that can be uploaded is 64MB.

## WhatsApp sender and recipient

When you send a message to a contact using WhatsApp channel:

* Recipient: the phone number of the contact
* Sender: the WhatsApp sender id enabled on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)

When you receive a message from a contact, the sender and recipient are inverted:

* Recipient: the WhatsApp sender id enabled on [Zenvia platform](https://app.zenvia.com/home/credentials/whatsapp/list)
* Sender: the phone number of the contact

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
