The Telegram can be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials/telegram/list).

**To activate Telegram you a need a registered Bot account on Telegram Bot API and an account enabled on Zenvia platform.**


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

* Recipient: the Telegram bot username enabled on Zenvia platform://app.zenvia.com/home/credentials/telegram/list)
* Sender: the conversation id (not the phone number)

When you send a message to a contact, the sender and recipient are inverted:

* Recipient: the conversation id (not the phone number)
* Sender: the Telegram bot username enabled on Zenvia platform://app.zenvia.com/home/credentials/telegram/list)

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
