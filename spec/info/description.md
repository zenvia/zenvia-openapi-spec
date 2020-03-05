# Overview

This is the reference documentation for the Zenvia *REST-like* API.

This API is based on resources which are represented by JSON format and are manipulated using HTTP protocol.

## What you can do with this API

You can send messages for the following channels:

* SMS
* WhatsApp
* Facebook

You can subscribe for some events and receive then in one webhook endpoint.
The available events are:

* Messages: You can receive messages events. You can select the channel of the messages which you want to receive as much as her direction.
* Messages status: You can receive status update for sent messages.

## What you need before start

Before use this API you need the following prerequisites:

* **Zenvia Account**: create one account on [Zenvia platform site](https://app.zenvia.com/)
* **Integrations**: to send or receive messages for desired channels you need to configure these channels on [integrations page](https://app.zenvia.com/home/credentials)
* **API Token**: create one API token on [API console](https://app.zenvia.com/home/api)
* **Webhook** (optional): to receive messages you need to subscribe for this events using the [subscriptions API resources](#tag/Subscriptions)

You can use [sandbox](#section/Getting-started-with-Sandbox) to start using and test this API immediately.

# Getting started with Sandbox

The fastest way to start using this API is our [Sandbox available on Zenvia platform](https://app.zenvia.com/home/sandbox).

When you create a new Sandbox, you will be guided step-by-step to send and receive messages using one desired channel.

[Click here and start sending and receiving messages using WhatsApp or SMS using this API.](https://app.zenvia.com/home/sandbox)

# SDKs

SDKs make it easy to use our APIs just by including them in your software.

These helper libraries are available in the [Node](https://github.com/zenvia/zenvia-sdk-node) and [Java](https://github.com/zenvia/zenvia-sdk-java) programming languages on our [GitHub](https://github.com/zenvia).

# HTTP Methods

HTTP methods are used for manipulate resources.

Not all resources have all operations, see the reference of each resource.

Methods used with collection endpoints:

| Http Method      | Operation                | Success HTTP status |
|:-----------------|:-------------------------|:--------------------|
| GET              | List collection items    | 200 - Ok            |
| POST             | Create a new item        | 200 - Ok            |

Methods used with item endpoints:

| Http Method      | Operation                    | Success HTTP status |
|:-----------------|:-----------------------------|:--------------------|
| GET              | Retrieve one resource item   | 200 - Ok            |
| DELETE           | Delete one resource item     | 204 - No content    |
| PATCH            | Update one resource item     | 200 - Ok            |

When one operation is executed successfully, the API will respond with 2xx status code.

# Error Handling

When one error occurs, the API will return one HTTP code 4xx or 5xx and the payload with Error Object.

The error object have the follwing schema:

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

## TOKEN
To use this API you need to send the API token in all requests.

This TOKEN needs to be sent in HTTP header 'X-API-TOKEN'.

Example:
```X-API-TOKEN: hKp94crjv9OF3UGrCpSXUJw1-UYHhRvLKNLt```

You can generate your token on [API console](https://app.zenvia.com/home/api) inside Zenvia platform website.

## JWT

The JWT token is primarily used by front-end applications for user interactions.

For server to server integrations use [TOKEN](/#section/Authentication/TOKEN) authentication type.
