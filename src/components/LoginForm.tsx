import {
  Card,
  Center,
  TextInput,
  PasswordInput,
  Group,
  Button,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "use-http";
import {
  UserContext,
  UserContextInterface,
  UserData,
} from "../context/UserContext";
import loginSchema from "../schemas/login.schema";
export interface LoginData {
  email: string;
  password: string;
}
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
function LoginForm({ classes }: any) {
  const form: UseFormReturnType<LoginData> = useForm<LoginData>({
    schema: zodResolver(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });
  const { userData, setUserData } = useContext(
    UserContext
  ) as UserContextInterface;
  const { error, post, loading, response } = useFetch<LoginResponse>(
    process.env.REACT_APP_serveruri
  );
  const navigate = useNavigate();
  async function handleLogin(logindata: LoginData) {
    await post("/api/sessions", logindata);
    if (response.ok && response.data) {
      const updatedData: UserData = {
        email: logindata.email,
        loggedIn: true,
        ...response.data,
      };
      setUserData(updatedData);
      // console.log("updated userData: ", userData);
      return navigate("/");
    }
  }
  console.log("classes haha", classes);
  return (
    <Center style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Card shadow="sm" className={classes.form__card}>
        <Center>
          <form
            className={classes.form}
            onSubmit={form.onSubmit((values: LoginData) => handleLogin(values))}
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
              <Button className={classes.button} type="submit">
                Submit
              </Button>
            </Group>
          </form>
        </Center>
      </Card>
    </Center>
  );
}

export default LoginForm;
