API Support: https://atendimento.zenvia.com/


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
* **Webhook** (optional): receive messages by subscribing to events using [subscriptions API resources](#tag/Subscriptions)

You can use the [Sandbox](#section/Getting-started-with-Sandbox) to start using and testing this API immediately.

## View your Usage Report
You can also access Zenvia platform to view your [Usage Report](https://app.zenvia.com/notifications/dashboard/api)

# Getting started with Sandbox

The fastest way to begin utilizing this API is with our [Sandbox (available on the Zenvia platform)](https://app.zenvia.com/home/sandbox).

As you create your new Sandbox, you'll be guided step-by-step in order to start sending and receiving messages using your desired channel.

[Click here and start sending and receiving messages using RCS, WhatsApp or SMS using this API.](https://app.zenvia.com/home/sandbox)

You are allowed to send test messages to phone numbers you've connected during a 24-hour period. Following that, you must reconnect your number by sending the keyword once again to continue using the Sandbox's features.

# API versions

All notable changes to ZenAPI will be documented here.

<!-- The format is based on Keep a Changelog: http://keepachangelog.com/en/1.0.0/ -->
<!-- and this project adheres to Semantic Versioning: http://semver.org/spec/v2.0.0.html -->

Currently, the ZenAPI is on version v2.

## v2 (current)

### 2021-05-24

* Added
    * Added the referral section that indicates an advertisement was clicked by the user to the [message event](#section/MESSAGE) received by the webhook

### 2020-10-27

* Added
    * Added RCS Channels sections.

### 2020-09-24

* Added
    * Added message-batches: API to send messages in batch.

### 2020-09-01

* Breaking Changes
    * Visitor not sent as a JSON within contents block. Instead, it's sent directly under the message object.
    * Location is no longer used as JSON.
    * Removed deprecated `channels` attribute from the template resource.

## v1 (deprecated)

You can still check v1 version clicking <a target="_blank" href="https://zenvia.github.io/zenvia-openapi-spec/v1/">here</a>.


### 2020-02-01

* Added
    * Added templates.
    * Added reporting API.

### 2020-01-01

* Added
    * Added Subscription section.
    * Added WhatsApp, SMS, and Facebook Channels sections.

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

The token needs to be sent in the HTTP header 'X-API-TOKEN'.

Example:
```X-API-TOKEN: hKp94crjv9OF3UGrCpSXUJw1-UYHhRvLKNLt```

Generate your token on the [API console](https://app.zenvia.com/home/api) on Zenvia platform.

## JWT

The JWT token is primarily used by front-end applications for user interactions.

For server-to-server integrations use the [token authentication](/#section/Authentication/TOKEN) approach.
