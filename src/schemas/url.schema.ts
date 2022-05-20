import { object, string } from "zod";
const urlSchema = object({
  url: string().url({ message: "Invalid URL" }),
});

export default urlSchema;
