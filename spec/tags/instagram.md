The Instagram channel may be used after its activation on Zenvia Platform.

**Get in touch with Zenvia consultants to connect your account.**


## Limitations

To be able to send messages to a contact, you first need to setup a webhook, which will allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).


The Instagram API content type and size limitations for sending media:

| Media | Content Type | Media Size |
|---|---|---|
| image | image/jpeg<br>image/png<br>image/gif<br>image/ico<br>image/bmp<br>image/webp<br>image/* | 8 MB |
| audio | audio/* | *Currently not supported* |
| video | video/* | *Currently not supported* |
| document | Any other valid MIME type. | *Currently not supported* |


## Instagram sender and recipient

When you receive a message from a contact from Instagram channel:

* Recipient: your Instagram account id (not your account @)
* Sender: the contact id on your account (not the contact @ and it will differ across accounts)

When you send a message to a contact, the sender and recipient are inverted:

* Recipient: the contact id on your account (not the contact @ and it will differ across accounts)
* Sender: your Instagram account id (not your account @)

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
