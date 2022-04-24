import { object, string } from "zod";

const registrationSchema = object({
  email: string().email({ message: "Invalid email" }),
  password: string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  passwordConfirm: string(),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords don't match",
  path: ["passwordConfirm"],
});

export default registrationSchema;
