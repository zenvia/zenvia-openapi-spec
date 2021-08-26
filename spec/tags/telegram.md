The Telegram can be used after it's activation on Zenvia Platform.

To activate Telegram you a need a registered Bot account on Telegram Bot API and an account information configured on [Zenvia platform](https://app.zenvia.com/home/credentials/telegram/list).


## Telegram limitations

To be able to send messages to a contact, you first need to setup a webhook, which allows you to receive events in the configured URL. [Learn more here](#tag/Webhooks).

Supported content types and sizes:

| Media | Content Type | Size |
|---|---|---|
| image | image/* | 5&nbsp;MB |
| video | video/* | 20&nbsp;MB |
| audio | audio/* | 20&nbsp;MB |
| document | Any other valid MIME type. | 20&nbsp;MB |


## Telegram sender and recipient

When you receive a message from a contact from Telegram channel:

* Recipient: is the bot username configured on [Zenvia platform](https://app.zenvia.com/home/credentials/telegram/list)
* Sender: is the conversation id (this is not the phone number)

When you send a message to a contact, the sender and recipient are inverted:

* Recipient: is the conversation id (this is not the phone number)
* Sender: is the bot username configured on [Zenvia platform](https://app.zenvia.com/home/credentials/telegram/list)

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
