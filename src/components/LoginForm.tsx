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
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "use-http";
import { UserContext, UserDataContext } from "../context/UserContext";
import loginSchema from "../schemas/login.schema";
import classes from "../styles/Form.module.css";

export interface LoginData {
    email: string;
    password: string;
}
export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

function LoginForm() {
    const form: UseFormReturnType<LoginData> = useForm<LoginData>({
        schema: zodResolver(loginSchema),
        initialValues: {
            email: "",
            password: "",
        },
    });
    const { userData, setUserData } = useContext(UserContext) as UserDataContext;
    const { error, post, loading, response } = useFetch<LoginResponse>(
        process.env.REACT_APP_serveruri
    );
    const navigate = useNavigate();
    async function handleLogin(logindata: LoginData) {
        await post("/api/sessions", logindata);
        if (response.ok && response.data) {
            console.log(response.data);
            setUserData({ email: logindata.email, loggedIn: true, ...response.data });
            return navigate("/");
        }
    }

    return (
        <Center style={{ minHeight: "100vh", minWidth: "100vw" }}>
            <Card shadow="sm" className="form__card">
                <Center>
                    <form
                        className="form"
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
                            <Button type="submit">Submit</Button>
                        </Group>
                    </form>
                </Center>
            </Card>
        </Center>
    );
}

export default LoginForm;
