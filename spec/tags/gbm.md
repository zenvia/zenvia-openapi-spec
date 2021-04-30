The Google Business Message channel may be used after its activation on Zenvia platform.

To activate Google Business Message you a need a registered number on Google Business Message API and account information configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**

Webhooks allow you to receive events in the configured URL. [Learn more here.](#tag/Webhooks)


## Limitations

The Google Business Message API has some limitations:

* To start a conversation with someone you need a special type of message ([a template message](#section/Template)), which needs an approval before being used.

* Messages not being as template content type, can only be delivered on the 24 hours after the last sent message by the client to the company.

* When sending PNG images with a **transparent background**, you can get an unexpected final result due to the image processing performed by WhatsApp in order to convert the image to JPEG.

Supported content types and sizes:

| Media | Content Type | Post-Processing Media Size* |
|---|---|---|
| document | Any valid MIME type. | 100&nbsp;MB |
| image | image/jpeg<br>image/png | 5 MB |


*This is the size of the media file after encryption. The maximum file size for media that can be uploaded is 64MB.

## Google Business Message sender and recipient

When you send some message for one contact using Google Business Message channel:

* Recipient: is the phone number of contact
* Sender: is the Google Business Message sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-message/list)

When you receive a message from one contact, the sender and recipient are inverted:

* Recipient: is the Google Business Message sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/google-business-message/list)
* Sender: is the phone number of contact

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
