# Overview

This is the reference documentation for the Zenvia *REST-like* API.

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


# Resources Tree

This API is oriented by resources and sub-resources. Resources are collections of some kind of object and can be manipulated using HTTP methods.

All our resources is represented using the JSON format and the content type `application/json`.

There are the resources of this API:

* Channels: Conversational channels where you can send or receive messages from/to some contact.

  * Messages: A collection of messages for one channel

* Subscriptions: Control the events to be sent for webhook endpoint.

* Templates: Message templates for sending notifications to customers.

# API Design

This API is based on resources witch are represented by JSON format and are manipulated using HTTP protocol.

## Resources path

The [resources tree](#section/Resources-Tree) is represented in HTTP paths in the following way.

To access the top-level resource collections, use the root path and resource name. Example for `channel` collection:

`/v1/channels`

To access some resource item use the collection name and and resource ID. Example for item `sms` of collection `channels`:

`/v1/channels/sms`

To access a sub-resource use the sub-resource name after the some resource item. Example for sub-resource `messages` of `sms` item of `channels` collection:

`/v1/channels/sms/messages`

The generic formula is:

`/v1/collection/itemId/collection/itemId/.....`

## HTTP Methods

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

## Error Handling

When one error occurs, the API will return one HTTP code 4xx or 5xx and the payload with Error Object.

The error object has:

* Code: An error code to identify the error programmatically.
* Message: A human readable text to help on error troubleshoot.
* Details: Error details to help identify the problem source.

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
