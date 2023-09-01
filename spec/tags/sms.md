The SMS channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials).
<br/>

**Get in touch with Zenvia consultants to create your account.**

Webhooks allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).

## SMS limitations

### SMS lenght
A SMS has a maximum lenght of 140 bytes, which can be used either with the standard encoding, which supports 160 characters (7 bits each),
or using an unicode encoding, which supports 70 characters (16 bits each).

### Character support
The standard encoding supports around 110 different characters, while the unicode encoding supports around 65500 characters.
<br>Here are *some* examples of characters which are **only** supported by the unicode encoding:
<br>`çÇáéíóúýÁÉÍÓÚÝàèìòùÀÈÌÒÙãõñäëïöüÿÄËÏÖÜÃÕÑâêîôûÂÊÎÔÛºª°|`

### Encoding selection
By default, our API selects automatically the SMS encoding based on the message content.
<br>However, it is also possible to enforce an `encoding strategy`. More details can be found in the [SMS Text](#section/SMS-Text) section.

### Concatenated SMS
To overcome the SMS size limitation, cellphone manufacturers developed a feature called `concatenated SMS`.
<br>This allows a long message to be break down into multiple SMS messages for delivery, which are joined back together by the cellphone SMS application.

Therefore, when a message is longer than 160 characters in the standard encoding or 70 characters in the unicode encoding, this feature will be applied
automatically.

Important things to keep in mind:
* Longer messages means more cost, because they actually are multiple messages.
* To identify each piece of the message, some bytes are used as a header in this feature, so each message piece is shorter than a single short message:
  * Up to 152 characters in the standard encoding and up to 66 characters in the unicode encoding.
  * The cut point currently is always a space, so some pieces might be smaller than this.
  * Combine the previous limitations, and words longer than the maximum characters in a message piece are not supported (152 characters in the standard encoding and 66 characters in the unicode encoding).
* Not all carriers support this feature. The bigest carriers support it, namely: Vivo, Claro, Tim and Oi.
* Double spaces and tabs will always be replaced by a single space.
* To send long messages, it might be necessary to contact our service team and request that this feature be enabled on your account.
* The maximum length currently supported is 1520 characters.

## SMS sender and recipient

When you send a message to a contact using SMS channel:

* Recipient: the complete phone number (including country code) of the contact.
* Sender: the SMS account alias connected on [Zenvia platform](https://app.zenvia.com/home/credentials).

When you receive a message from a contact, the sender and recipient are inverted:

* Recipient: the SMS account alias connected on [Zenvia platform](https://app.zenvia.com/home/credentials).
* Sender: the complete phone number (including country code) of the contact.

The sender goes in the attribute `from` and the receiver goes in the attribute `to` of message object.
