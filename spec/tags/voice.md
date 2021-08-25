To access  the voice channel, you need to create your account here:
https://voice-app.zenvia.com/painel/signup.php. 

After creating the account, you can get your voice access token on your voice panel homepage: https://voice-app.zenvia.com/painel/

The voice channel may be used after you connect a voice access token on [Zenvia platform](https://app.zenvia.com/home/credentials).

Webhooks allow you to receive status in the configured URL. [Learn more here.](#tag/Webhooks)


## Voice limitations

Supported content types and sizes:

| Media | Content Type | Size |
|---|---|---|
| audio | audio/mp3<br>audio/wav | 5&nbsp;MB |

## Voice sender and recipient

When you send a voice message to a contact using Voice channel:

* Recipient: is the phone number of the contact
* Sender: is the sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials)

When you receive a voice message from a contact, the sender and recipient are inverted:

* Recipient: is the sender id configured on [Zenvia platform](https://app.zenvia.com/home/credentials)
* Sender: is the phone number of the contact

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of the message object.
