API Support: https://atendimento.zenvia.com/<span class="link-content">[OpenAPI specification source](https://github.com/zenvia/zenvia-openapi-spec)</span>


# Overview

This is the reference documentation for the Zenvia *REST-like* API. The API itself is based on resources that are represented by JSON format and are manipulated using the HTTP protocol.

## Features

You can send messages through the [Zenvia-supported channels](#section/Supported-Channels).

You can also subscribe to events and receive them on a webhook of your choosing. The available events for each and every channel are:

* Messages: Receive messages events for outgoing and/or incoming messages.
* Messages status: Receive status updates for outgoing messages.

## Pre-requisites

Before using this API you need the following:

* **Zenvia Account**: create an account on [Zenvia platform's site](https://app.zenvia.com/)
* **Integrations**: configure desired channels to send and/or receive messages on the [integrations page](https://app.zenvia.com/home/credentials)
* **API Token**: create an API token on the [API console](https://app.zenvia.com/home/api)
* **Webhook**: subscribe to events using [subscriptions API resources](#tag/Subscriptions)
    * _Status Webhook_ **(important)**: Since our messaging API is asynchronous, it is necessary to register a webhook in order to know whether the message sending was successful or not.
    * _Message Webhook_ (optional): receive message responses by subscribing to message events.

You can use the [Sandbox](#section/Getting-started-with-Sandbox) to start using and testing this API immediately.

## View your Usage Report
You can also access Zenvia platform to view your [Usage Report](https://app.zenvia.com/notifications/dashboard/api)

# Getting started with Sandbox

The fastest way to begin utilizing this API is with our [Sandbox (available on the Zenvia platform)](https://app.zenvia.com/home/sandbox).

As you create your new Sandbox, you'll be guided step-by-step in order to start sending and receiving messages using your desired channel.

[Click here and start sending and receiving messages using RCS, WhatsApp or SMS using this API.](https://app.zenvia.com/home/sandbox)

You are allowed to send test messages to phone numbers you've connected during a 24-hour period. Following that, you must reconnect your number by sending the keyword once again to continue using the Sandbox's features.

# API versions

All breaking changes to Zenvia APIs will be documented here.

Currently, the Zenvia APIs is on version [v2](https://zenvia.github.io/zenvia-openapi-spec/v2/).

## v2 (current)

* Breaking Changes
    * Visitor not sent as a JSON within contents block. Instead, it's sent directly under the message object.
    * Location is no longer used as JSON.
    * Removed deprecated `channels` attribute from the template resource.

## v1 (deprecated)

You can still check v1 version clicking [here](https://zenvia.github.io/zenvia-openapi-spec/v1/).

# SDKs

Make it simpler to use our API by integrating our SDK into your software.

These helper libraries are available on [Node](https://github.com/zenvia/zenvia-sdk-node) and [Java](https://github.com/zenvia/zenvia-sdk-java) programming languages and located on our [GitHub](https://github.com/zenvia) page.

# HTTP Methods

HTTP methods are used to manipulate resources. Though, as not all resources allow all HTTP operations, observeOK the reference of each resource below.

Methods used with collection endpoints:

| HTTP Method      | Operation                | Success HTTP status |
|:-----------------|:-------------------------|:--------------------|
| GET              | List collection items    | 200 - OK            |
| POST             | Create a new item        | 200 - OK            |

Methods used with item endpoints:

| HTTP Method      | Operation                    | Success HTTP status |
|:-----------------|:-----------------------------|:--------------------|
| GET              | Retrieve one resource item   | 200 - OK            |
| DELETE           | Delete one resource item     | 204 - No content    |
| PATCH            | Update one resource item     | 200 - OK            |

When an operation is executed successfully, the API will respond with a 2xx status code.

# Error Handling

When one error occurs, the API will return a 4xx or 5xx HTTP status code and the payload with an Error Object.

The error object obeys the follwing schema:

<SchemaDefinition schemaRef="#/components/schemas/error.base" />

Responses error codes are detailed below.

| Http Status Code | Code                 | Message                          | Retry request |
|:-----------------|:---------------------|:---------------------------------|:--------------|
| 400              | VALIDATION_ERROR     | Validation error                 | No            |
| 401              | AUTHENTICATION_ERROR | No authorization token was found | No            |
| 404              | NOT_FOUND            | Not found                        | No            |
| 409              | DUPLICATED           | Entity already exists            | No            |
| 500              | INTERNAL_ERROR       | Internal error                   | Yes           |

# Authentication

## Token
To use this API you need to send the API token in every request.

The token needs to be sent in the HTTP header `X-API-TOKEN`.

#### Example:
```
X-API-TOKEN: hKp94crjv9OF3UGrCpSXUJw1-UYHhRvLKNLt
```

Generate your token on the [API console](https://app.zenvia.com/home/api) on Zenvia platform.

## Signature
This is an advanced version of the [token authentication](#section/Authentication/Token).

In this approach, alongside the `X-API-Token` http header, it is necessary to send a request signature.
<br>The signature is expected in the `X-API-Signature` http header.

This signature needs to be generated for each request, since it is unique to the request.

Although similar, the standard token do not support signature, and the signature token always requires a signature.
<br>Both types of token can be created in the [API console](https://app.zenvia.com/home/api) on Zenvia platform.

#### Example:
```
X-API-Token: hKp94crjv9OF3UGrCpSXUJw1-UYHhRvLKNLt
X-API-Signature: rtHTyAfsJFD5UFpPDeztUI3JE0Guea5pqG9iJqrT2EY=
```
<br>

### Signature generation

The signature is a *HMAC-SHA256* hash, calculated using the *token secret* obtained at the creation of the *signature token*
in the [API console](https://app.zenvia.com/home/api), encoded as a *base64* string.

The input for the hash generation is a *multiline* string, composed by six lines separated by *unix* line breaks: `\n`, **without** an empty line in the end.

The components of each line are the following:
1. The request method.
<br>*Ex: `POST`, `GET`.*

2. The MD5 hash of the request body.
<br>*Ex: `d98bd30dcb3c03d166eee84efba1e3d7`*
    - For request without body, this line must be **empty**.
    - For `multipart/form-data`, only the file content from the request is expected for the hash calculation.

3. The request `Content-Type` header.
<br>*Ex: `application/json`.*
    - For request without body, this line must be **empty**.
    - For `multipart/form-data`, the file content type should be used.

4. The request `Date` header, formatted following the RFC2616.
<br>*Ex: `Sun, 12 Feb 2023 07:40:32 GMT`.*
    - Timestamps in the future will not be considered valid.
    - Timestamps older than *3 minutes* will be refused.

5. The request hostname. It probably will always be *api.zenvia.com*.
<br>*Ex: `api.zenvia.com`.*

6. The request resource, including the query string when present.
<br>*Ex: `/v2/channels/whatsapp/messages`, `/v2/files?limit=5`.*

<br>

#### Signature input examples
```
POST
d98bd30dcb3c03d166eee84efba1e3d7
application/json
Sun, 12 Feb 2023 07:40:32 GMT
api.zenvia.com
/v2/channels/whatsapp/messages

```

```
GET


Sun, 12 Feb 2023 07:40:32 GMT
api.zenvia.com
/v2/files?limit=5
```

<br>

#### Signature generation example in NodeJS
```javascript
const crypto = require('crypto');
const axios = require('axios');

const payload = JSON.stringify({
  from: 'sender',
  to: 'recipient',
  contents: [{
    type: 'text',
    text: 'Hi Zenvia!',
  }],
});

const date = new Date().toUTCString();
const contentType = 'application/json';

const stringToSign = `POST
${crypto.createHash('md5').update(payload).digest('hex')}
${contentType}
${date}
api.zenvia.com
/v2/channels/whatsapp/messages`;

const token = '123456';
const secret = 'ABCDEF';

const signature = crypto.createHmac('sha256', secret).update(stringToSign).digest('base64');

const headers = {
  Date: date,
  'Content-Type': contentType,
  'X-API-Token': token,
  'X-API-Signature': signature,
}

const response = await axios.post('https://api.zenvia.com/v2/channels/whatsapp/messages', payload, { headers });

console.log(response.data);
```

## JWT

The JWT token is primarily used by front-end applications for user interactions.

For server-to-server integrations use the [token authentication](#section/Authentication/Token) approach.
