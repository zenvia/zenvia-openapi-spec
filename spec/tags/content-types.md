## Supported Channels

Messaging can be handled through SMS, WhatsApp and Facebook channels. For each content type, covered in the next section, the following table reflects the applicability in relation to these channels:

| Content Type | SMS | Facebook | WhatsApp |
|---|:---:|:---:|:---:|
| text | &#10004; | &#10004; | &#10004; |
| file | &#10005; | &#10004; | &#10004; |
| contacts | &#10005; | &#10005; | &#10004; |
| location | &#10005; | &#10005; | &#10004; |
| template | &#10005; | &#10005; | &#10004; |

## Standard contents
This kind of message content may only be sent as a reply to a message sent by the user. So these kind of message content cannot be sent to start a interaction with an user. And even as a reply, these kind of message contents can only be sent if the last message from the user was sent less than 24 hours ago.

### Text content
This type of content is the most used type of content, and its composed of a plain text.

<SchemaDefinition schemaRef="#/components/schemas/content.contentTypes.text" />

### File content
This is used to send a file to the user. The file will be presented to the user in different manner based on the file type. There are four types of presentation:
* Image
* Video
* Audio
* Document
<br><br>

### Contacts content
Use this type of content to send contacts information to the user.

### Location content
This content is used to send location messages representing a point on the map to the user.

## Notification contents
These types of contents are special, because they are allowed to be sent without any user interaction and also even if the last user message was sent more than 24 hours ago.

However, it is not allowed to send these these types of contents without some kind of opt-in from the user. This is a business restriction, not a technical one.

### Template content
Template contents have a fixed text content, with a few variables placed where necessary. This type of content must be submitted for approval to WhatsApp. The nature of the content that is subjected to approval is very limited.

#### Submitting a template content for approval
If you already have a WhatsApp business account with us, just send email to *whatsapp@zenvia.com* and we will start the process for you.
