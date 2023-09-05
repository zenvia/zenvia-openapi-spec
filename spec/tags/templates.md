Message Templates are message formats used for common reusable messages a business may want to send. Businesses must use Message Templates for sending notifications to customers.

This allows a business to send just the template identifier along with the appropriate parameters instead of the whole message content.

Templates have the following components:
* Header
* Body
* Footer
* Buttons

The components object allows you to indicate the type of message and the message's parameters.

## Standard message templates

The standard message templates allows you to send plain text-only messages using a <code>body</code> components object.

## Media message templates

Media message templates expand the outgoing content beyond the standard message template type to include media, headers, and footers using a <code>header</code> and <code>footer</code> components object.

## Interactive message templates

Interactive message templates expand the outgoing content beyond the standard message template and media messages template types to include interactive buttons using the <code>button</code> components object.

There are three types of predefined buttons offered: actions, quick replies and mixed.

### ACTIONS

Allows your customer to call a phone number and visit a website.

### QUICK REPLIES

Allows your customer to return a simple text message.

When a quick reply message is sent, and the customer clicks one of the options, your webhook will receive a `MESSAGE_EVENT`, provided you've subscribed to that kind of event. The `MESSAGE_EVENT` itself will contain one content of type `text` with the <code>text</code> and <code>payload</code> fields defined in the creation of interactive templates.

You can learn more about it on the [subscriptions section](#section/MESSAGE).

Quick reply buttons also have the `OPT_OUT` type, a exclusive button for marketing template. Button that Meta recommends using in marketing templates to increase its approval chances. With it, the final contact has the option to request not to receive messages of this type from the company.

### MIXED

Allows that in RCS messages you can mix buttons like ACTIONS and QUICK REPLIES.

## E-Mail templates

E-mail templates allows sending content up to 30MB to multiple contacts using a small payload.

Email templates have the following components:
* Header
* Body
* Attachments
* Email
