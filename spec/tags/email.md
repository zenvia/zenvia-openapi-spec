The E-mail channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials/email/list).
<br/>

Webhooks allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).

## E-Mail limitations

You either can use one of the Zenvia domains provided in the e-mail activation console, or you can use your own domain.

However, to use your domain, your will need to change or create DNS entries to make this possible.

How to do this will be described in the e-mail activation console [Zenvia platform](https://app.zenvia.com/home/credentials/email/list)

<br>
Supported content types and sizes:

| Media | Content Type | E-Mail Size* |
|---|---|---|
| document | Any valid MIME type. | 25&nbsp;MB |

*The maximum size is for the entire e-mail.


## E-Mail sender and recipient

When you send a message to a contact using E-Mail channel:

* Recipient: the e-mail address of the contact.
* Sender: the e-mail address connected on [Zenvia platform](https://app.zenvia.com/home/credentials/email/list).

When you receive a message from a contact, the sender and recipient are inverted:

* Recipient: the e-mail address connected on [Zenvia platform](https://app.zenvia.com/home/credentials/email/list).
* Sender: the e-mail address of the contact.

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
