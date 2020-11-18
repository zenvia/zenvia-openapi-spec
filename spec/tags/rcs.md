The RCS channel may be used after it's activation on Zenvia Platform.
Get in touch with Zenvia consultants to create your Google agent (An agent is a conversational entity that interacts with users by sending messages and reacting to users' responses).

## Limitations

The RCS channel is compatible only with smartphones Android, from 8.0 version (Oreo). 
To enable RCS on an Android device, you can configure it with pre-release versions of the Messages and Carrier Services apps that connect it to an RCS backend.
The use of RCS channel follows the Google content policies, available here: https://developers.google.com/business-communications/rcs-business-messaging/support/tos.

## RCS sender and recipient

When you send some message for one contact using RCS channel:

Recipient: is the phone number of contact
Sender: is the RCS Agent ID (an email created and linked with a Zenvia's OrgID)

When you receive a message from one contact, the sender and recipient are inverted:

Recipient: is the RCS Agent ID
Sender: is the phone number of contact

In API the sender is the field from and the receiver is the field to of message object.
