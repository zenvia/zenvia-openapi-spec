The batch api makes it possible to send a message with one or more contents to multiple contacts at once.
<br/><br/>
The channels can be used after activation on the [Zenvia platform](https://app.zenvia.com/home/credentials).
Supported channels are **SMS** and **WhatsApp**.

| Content Type | SMS | WhatsApp |
|---|:---:|:---:|
| text | &#10004; | &#10005; |
| template | &#10005; | &#10004; |

> To send batch with WhatsApp channel you must have a template message, which needs an approval before being used.

<br/>

### What you need to know about the contacts file

* The file must be in **.csv** format;
* The maximum file size is **50MB**;
* The mandatory delimiter to be used between the values ​​is the **semicolon (";")**;
* The first line of the file is dedicated to the header. There must be a column that has the recipients' phone numbers. If your content has variables, there must be corresponding columns.

<br/>

## How to view your batches shots report
You can also view the list of shots fired and their status by accessing the [Zenvia Platform](https://app.zenvia.com/notifications/dashboard)  
