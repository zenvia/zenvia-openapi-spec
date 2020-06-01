Message Templates are message formats for common reusable messages a business may want to send. Businesses must use Message Templates for sending notifications to customers.

This allows a business to send just the template identifier along with the appropriate parameters instead of the full message content.

Template components:

* header
* body
* footer
* buttons

## Text only message templates

## Media message templates

## Interactive message templates

Interactive message templates expand the content you can send recipients beyond the standard message template and media messages template types to include interactive buttons using the components object.

There are two types of predefined buttons offered.

### ACTIONS

Allows your customer to call a phone number and visit a website.

When an end user clicks on call to action buttons you will not receive any event about this click.

### QUICK REPLIES

Allows your customer to return a simple text message.

When a quick reply message is sent and the customer clicks one of the options, your webhook will receive a `MESSAGE_EVENT` on your webhook if you subscribe to that kind of event. The `MESSAGE_EVENT` will contains one content of type `text` with, the <code>text</code> and <code>payload</code> fields are defined in the creation of interactive template.
