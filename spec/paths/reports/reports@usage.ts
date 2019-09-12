import { OperationObject, PathItemObject, ResponseObject } from "openapi3-ts";
import { ref as endDateRef } from "../../components/parameters/endDate";
import { ref as startDateRef } from "../../components/parameters/startDate";
import { ref as groupByRef } from "../../components/parameters/groupBy";
import { ref as ticketTypesRef } from "../../components/parameters/ticketTypes";
import { ref as channelsRef } from "../../components/parameters/channels";
import { ref as usageResponseRef } from "../../components/schemas/usage/base";

const get: OperationObject = {
  summary: "Get usage report for the current organization",
  description:
    "Currently, only usage for Web Chat, SMS, WhatsApp and Facebook is available. More channels will be added later. Error messages will provide details about any problems with the request.",
  tags: ["Usage"],
  responses: {
    200: {
      description: "Usage entries for the current organization",
      content: {
        "application/json": {
          schema: {
            $ref: usageResponseRef
          }
        }
      }
    } as ResponseObject,
    400: {
      description: "Bad request",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                description: "Something is wrong with your request",
                type: "string"
              }
            }
          }
        }
      }
    },
    401: {
      description: "Authorization error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                description: "Something is wrong with your authentication token",
                type: "string"
              }
            }
          }
        }
      }
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                description: "Something is wrong in the server side",
                type: "string"
              }
            }
          }
        }
      }
    },
    502: {
      description: "Data source error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                description: "Something is wrong with our data source",
                type: "string"
              }
            }
          }
        }
      }
    }
  }
};

const path: PathItemObject = {
  get,
  parameters: [
    {
      $ref: startDateRef
    },
    {
      $ref: endDateRef
    },
    {
      $ref: groupByRef
    },
    {
      $ref: channelsRef
    },
    {
      $ref: ticketTypesRef
    }
  ]
};

export default path;
