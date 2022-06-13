import {
  Card,
  TextInput,
  Group,
  Button,
  PasswordInput,
  Center,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import registrationSchema from "../schemas/registration.schema";
import { useFetch } from "use-http";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "../styles/RegisterForm.module.scss";
interface UserRegistrationData {
  email: string;
  password: string;
  passwordConfirmation: string;
}
type ServerError = string | null;
const RegisterForm: React.FC = () => {
  const form = useForm<UserRegistrationData>({
    schema: zodResolver(registrationSchema),
    initialValues: { email: "", password: "", passwordConfirmation: "" },
  });
  const navigate = useNavigate();
  const { post, loading, response } = useFetch(
    `${process.env.REACT_APP_serveruri}/v1`
  );
  const [serverError, setServerError] = useState<ServerError>(null);
  async function registerUser(data: UserRegistrationData) {
    await post("/users", data);
    if (response.ok) navigate("/login");
    console.log("status: ", response.status);
    switch (response.status) {
      case 404:
        setServerError(
          "It seems like our service is down. Please try again later."
        );
        break;
      case 409:
        form.setFieldError("email", "This username already exists.");
        break;
      default:
        setServerError(
          "Our service could not process your request. Please try again later"
        );
    }
  }
  return (
    <Center className={classes.register}>
      <Card shadow="sm" className={classes.form__card}>
        <Center>
          <form
            className={classes.form}
            onSubmit={form.onSubmit((values) => registerUser(values))}
          >
            <TextInput
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              required
              label="Password"
              placeholder=""
              {...form.getInputProps("password")}
            />
            <PasswordInput
              required
              label="Confirm Password"
              placeholder=""
              {...form.getInputProps("passwordConfirmation")}
            />
            <Group position="center" mt="md">
              <Button className={classes["main-button"]} type="submit">
                {loading ? "Loading..." : "Register"}
              </Button>
            </Group>
          </form>
        </Center>
      </Card>
    </Center>
  );
};
export default RegisterForm;
