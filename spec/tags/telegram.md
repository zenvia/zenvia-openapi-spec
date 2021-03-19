The Telegram can be used after it's activation on Zenvia Platform.

To activate Telegram you a need a registered Bot account on Telegram Bot API and an account information configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**

Webhooks allow you to receive events in the configured URL. [Learn more here.](#tag/Webhooks)

## Limitations

Supported content types and sizes:

| Media | Content Type | Size |
|---|---|---|
| file | Any valid MIME type. | 50&nbsp;MB |
| photo | image/jpeg<br>image/png | 10&nbsp;MB |

## Telegram sender and recipient

When you send some message for one contact using Telegram channel:

* Recipient: is the phone number of contact
* Sender: is the Telegram sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/telegram/list)

When you receive a message from one contact, the sender and recipient are inverted:

* Recipient: is the Telegram sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials/telegram/list)
* Sender: is the phone number of contact

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.