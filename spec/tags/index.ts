import { TagObject } from "openapi3-ts";
import { rawLoad } from "../../utils/raw-load";

const whatsappDescription = rawLoad(__dirname, "./whatsapp.md");
const facebookDescription = rawLoad(__dirname, "./facebook.md");
const subscriptionsDescription = rawLoad(__dirname, "./subscriptions.md");
const usageDescription = rawLoad(__dirname, "./usage.md");

const tags: TagObject[] = [
  {
    name: "WhatsApp",
    description: whatsappDescription
  },
  {
    name: "Facebook",
    description: facebookDescription
  },
  {
    name: "Subscriptions",
    description: subscriptionsDescription
  },
  {
    name: "Usage",
    description: usageDescription
  }
];

export default tags;
