The batch API makes it possible to send a message with one or more contents to multiple contacts at once. The channels can be used after activation on the [Zenvia platform](https://app.zenvia.com/home/credentials).

The supported channels are SMS, WhatsApp, RCS(Basic) and E-mail.

| Content Type | SMS | WhatsApp | RCS Basic | E-mail
|---|:---:|:---:|:---:|:---:|
| text | &#10004; | &#10005; | &#10004; | &#10005;
| template | &#10005; | &#10004; | &#10004; | &#10004;


> To send batch through WhatsApp channel, you must have a template message, which needs an approval before being used.

> Only **Basic** RCS messages can be sent in batches.

### What you need to know about the contacts file

* The file must be in **.csv** format;
* The maximum file size is **50MB**;
* The mandatory delimiter to be used between the values ​​is the **semicolon (";")**;
* The first line of the file is dedicated to the header. There must be a column that contains the recipients' phone numbers. If your content has variables, there must be corresponding columns.
