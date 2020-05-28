Interactive message templates expand the content you can send recipients beyond the standard message template and media messages template types to include interactive buttons using the components object.

There are two types of predefined buttons offered.

## ACTIONS

Allows your customer to call a phone number and visit a website.

## QUICK REPLIES

Allows your customer to return a simple text message.

When a quick reply message is sent and the customer selects one of the options, your webhook will receive a request with the schema as follows:

<SchemaDefinition schemaRef="#/components/schemas/events.quick-replies" />
<br>

The <code>text</code> and <code>payload</code> fields are defined in the creation of interactive template.