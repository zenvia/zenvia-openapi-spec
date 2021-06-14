The Telegram can be used after it's activation on Zenvia Platform.

To activate Telegram you a need a registered Bot account on Telegram Bot API and an account information configured on [Zenvia platform](https://app.zenvia.com/home/credentials/telegram/list).

To be able to send messages to a contact, you first need to setup a webhook, which allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).


## Limitations

Supported content types and sizes:

| Media | Content Type | Size |
|---|---|---|
| image | image/jpeg<br>image/png | 10&nbsp;MB |
| document | Any other valid MIME type. | 50&nbsp;MB |


## Telegram sender and recipient

When you receive a message from a contact from Telegram channel:

* Recipient: is the bot username configured on [Zenvia platform](https://app.zenvia.com/home/credentials/telegram/list)
* Sender: is the conversation id on Telegram (this is not the phone number)

When you send a message to a contact, the sender and recipient are inverted:

* Recipient: is the conversation id on Telegram (this is not the phone number)
* Sender: is the bot username configured on [Zenvia platform](https://app.zenvia.com/home/credentials/telegram/list)

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
