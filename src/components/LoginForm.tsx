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
import classes from "../styles/LoginForm.module.scss";
export interface LoginData {
  email: string;
  password: string;
}
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
const LoginForm: React.FC = () => {
  const form: UseFormReturnType<LoginData> = useForm<LoginData>({
    schema: zodResolver(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });
  const { setUserData, userData } = useContext(
    UserContext
  ) as UserContextInterface;
  const { post, loading, response } = useFetch<LoginResponse>(
    `${process.env.REACT_APP_serveruri}/v1`
  );
  const navigate = useNavigate();
  async function handleLogin(logindata: LoginData) {
    await post("/sessions", logindata);
    if (response.ok && response.data) {
      const updatedData: UserData = {
        email: logindata.email,
        loggedIn: true,
        ...response.data,
      };
      setUserData(updatedData);
      return navigate("/");
    }
    switch (response.status) {
      case 401:
        form.setFieldError("password", "The username or password is incorrect");
        break;
      default:
        form.setFieldError(
          "password",
          "Something went wrong! Please try again later"
        );
    }
    console.log("rejected with code: ", response.status);
  }
  useEffect(() => {
    console.log("Loginform: userData changed, ", JSON.stringify(userData));
  }, [userData]);
  return (
    <Center style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Card shadow="sm" className={classes.form__card}>
        <Center>
          <form
            className={classes.form}
            onSubmit={form.onSubmit((values: LoginData) => handleLogin(values))}
          >
            <TextInput
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder=""
              {...form.getInputProps("password")}
            />

            <Group position="center" mt="md">
              <Button className={classes["main-button"]} type="submit">
                {loading ? "Signing in..." : "Login"}
              </Button>
            </Group>
          </form>
        </Center>
      </Card>
    </Center>
  );
};

export default LoginForm;
