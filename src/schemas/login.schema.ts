import { object, string } from "zod";

const loginSchema = object({
  email: string().email({ message: "Invalid email" }),
  password: string().min(1, {
    message: "Please enter a password",
  }),
});

export default loginSchema;
