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
function RegisterForm() {
  const form = useForm({
    schema: zodResolver(registrationSchema),
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  return (
    <Center style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Card shadow="sm" className={classes["card"]}>
        <Center>
          <form
            className={classes["registration-box__form"]}
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
            <PasswordInput
              required
              label="Confirm Password"
              placeholder=""
              {...form.getInputProps("passwordConfirm")}
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
