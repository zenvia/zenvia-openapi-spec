## Supported Channels

Messaging can be handled through SMS, WhatsApp, Facebook and RCS channels. For each content type, covered in the next section, the following table reflects the applicability in relation to these channels:

| Content Type | SMS      | Facebook | WhatsApp | RCS      |
|:-------------|:---------|:---------|:---------|:---------|
| text         | &#10004; | &#10004; | &#10004; | &#10004; |
| file         | &#10005; | &#10004; | &#10004; | &#10004; |
| contacts     | &#10005; | &#10005; | &#10004; | &#10005; |
| location     | &#10005; | &#10005; | &#10004; | &#10005; |
| template     | &#10005; | &#10005; | &#10004; | &#10005; |
| card         | &#10005; | &#10005; | &#10004; | &#10004; |
| carousel     | &#10005; | &#10005; | &#10004; | &#10004; |
| button       | &#10005; | &#10005; | &#10004; | &#10004; |


## Text
This type of content is the most used one and is composed of plain text.

<SchemaDefinition schemaRef="#/components/schemas/content.text" showWriteOnly="true" />

## File
This type of content is used to send a file to the user. Depending on the file type, the file itself will be displayed with a different appearance. There are four types of presentation:
* Image
* Video
* Audio
* Document

<SchemaDefinition schemaRef="#/components/schemas/content.file" showWriteOnly="true" />

## Contacts
This type of content is used to send contact information to the user.

<SchemaDefinition schemaRef="#/components/schemas/content.contacts" showWriteOnly="true" />

## Location
This type of content is used to send location messages represented as a point on the map to the user.

<SchemaDefinition schemaRef="#/components/schemas/content.location" showWriteOnly="true" />

## Template
This type of content has an underlying fixed text content with some required variables. After being filled, the template must be submitted for approval to WhatsApp. The rules that the submitted content must abide to are very restrictive.

<SchemaDefinition schemaRef="#/components/schemas/content.template" showWriteOnly="true" />

## Card

The card is the container that holds the information that should be displayed by the connector.

<SchemaDefinition schemaRef="#/components/schemas/content.card" />

## Carousel

The RCS carousel is a horizontally scrollable carousel of up to 10 vertical rich cards. Each card can include the following elements:
* Title text.
* Subtitle text.
* Image (which will be placed above the title, subtitle and buttons) - image is not required to be placed in a card.
* Up to 4 buttons (RCS limitation) with the following actions: Link, Navigation, Publish text.

<SchemaDefinition schemaRef="#/components/schemas/content.carousel" />

## Buttons

Buttons contain click and action properties that define the type of action set on user click operation.

<SchemaDefinition schemaRef="#/components/schemas/content.buttons" />

### Submitting a template content for approval
If you already have a WhatsApp business account with us, just send email to *whatsapp@zenvia.com* and we will start the process for you.
