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
import classes from "../styles/RegisterForm.module.css";
import { useFetch } from "use-http";
import { useNavigate } from "react-router-dom";
interface UserRegistrationData {
  email: string;
  password: string;
  passwordConfirmation: string;
}
function RegisterForm() {
  const form = useForm({
    schema: zodResolver(registrationSchema),
    initialValues: { email: "", password: "", passwordConfirmation: "" },
  });
  const navigate = useNavigate();
  const { error, post, loading, response } = useFetch(
    process.env.REACT_APP_serveruri
  );
  async function registerUser(data: UserRegistrationData) {
    try {
      const result = await post("/api/users", data);
      console.log("response: ", response);
      if (response.ok) navigate("/login");
      // switch(response.status){
      //   case 404:
      // }
    } catch (err: any) {}
  }
  return (
    <Center className={classes.register}>
      <Card shadow="sm" className="form__card">
        <Center>
          <form
            className="form"
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
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Center>
      </Card>
    </Center>
  );
}
export default RegisterForm;
