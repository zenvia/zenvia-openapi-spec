## Supported Channels

Messaging can be handled through SMS, WhatsApp, Facebook, RCS and Google Business Messages channels. For each content type, covered in the next section, the following table reflects the applicability in relation to these channels:

| Content Type | SMS      | Facebook | WhatsApp | RCS      | Voice    | GBM     |
|:-------------|:---------|:---------|:---------|:---------|:---------|:--------|
| text         | &#10004; | &#10004; | &#10004; | &#10004; | &#10005; |&#10004; |
| file         | &#10005; | &#10004; | &#10004; | &#10004; | &#10005; |&#10004; |
| contacts     | &#10005; | &#10005; | &#10004; | &#10005; | &#10005; |&#10005; |
| location     | &#10005; | &#10005; | &#10004; | &#10005; | &#10005; |&#10005; |
| template     | &#10005; | &#10005; | &#10004; | &#10005; | &#10005; |&#10005; |
| call         | &#10005; | &#10005; | &#10005; | &#10005; | &#10004; |&#10005; |
| carousel     | &#10005; | &#10005; | &#10004; | &#10004; | &#10005; |&#10005; |

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

### Submitting a template content for approval
If you already have a WhatsApp business account with us, you may submit templates for approval using our [template console](https://app.zenvia.com/home/templates).

## Card

This is a rich content composed of *at least one* of these components (none of them are mandatory):
* Media
* Title
* Text

And additionally, it may also have these:
* Buttons
* Quick reply buttons (they are not part of the card itself and instead are shown below it)

More information on each attribute may be found below.

<SchemaDefinition schemaRef="#/components/schemas/content.card" />

## Carousel

This is very similar to a [card](#section/Card), except this is a horizontally scrollable sequence of them, with a few diferences and limitations.

More details may be found below.

<SchemaDefinition schemaRef="#/components/schemas/content.carousel" />
