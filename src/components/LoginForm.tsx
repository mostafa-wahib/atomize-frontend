import {
  Card,
  Center,
  TextInput,
  PasswordInput,
  Group,
  Button,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import loginSchema from "../schemas/login.schema";
import classes from "../styles/Form.module.css";
function LoginForm() {
  const form = useForm({
    schema: zodResolver(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Center style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Card shadow="sm" className="form__card">
        <Center>
          <form
            className="form"
            onSubmit={form.onSubmit((values) => console.log(values))}
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

            <Group position="center" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Center>
      </Card>
    </Center>
  );
}

export default LoginForm;
