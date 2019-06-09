The WhatsApp channel can be used after your activation on Zenvia platform.

To activate WhatsApp you a need a registered number on WhatsApp Business API and account informations configured on Zenvia platform.

**Get in touch with Zenvia consultants to start your account creation.**

## Limitations

The WhatsApp API has some limitations:

* To start a conversation with someone you need a special type of message (a template message) and an approval before being used.

## Message sender and recipient

When you send some message for one contact using WhatsApp channel:

* Recipient: is the phone number of contact
* Sender: is the WhatsApp integration id configured on Zenvia platform

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient: is the WhatsApp integration id configured on Zenvia platform
* Sender: is the phone number of contact

In API the sender is the field `from` and the receiver is the field `to` of message object.
