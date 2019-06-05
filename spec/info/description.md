# Overview

This specification is intended to to be a good starting point for describing Zenvia API in [OpenAPI format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md).



# REST

Our API follows the REST convention.

With REST we expose an hierarchical entity models called resources
that you can interact with using REST operations
like create a new resource item, delete one resource item, list all resource items, etc...

All our resources is represented using the JSON format and the content type 'application/json'.



## Resources Tree



## HTTP Methods



## Pagination



## Error Handling

Responses error codes are detailed below.

| Http Status Code | Code                 | Message                          |
|:-----------------|:---------------------|:---------------------------------|
| 401              | AUTHENTICATION_ERROR | No authorization token was found |
| 500              | INTERNAL_ERROR       | Internal error                   |
| 404              | NOT_FOUND            | Not found                        |
| 400              | VALIDATION_ERROR     | Validation error                 |



## Restrictions



### Rate Limit



## Deviations from REST



# Authentication

To use this API you need to send the JWT token in all requests.

The JWT token needs to be sent in HTTP header 'Authorization' with a 'bearer token'.

Example:
```Authorization: Bearer eyJhbGciOiJSUzI1NiJ9..```
