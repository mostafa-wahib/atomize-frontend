import {
  Button,
  Center,
  createStyles,
  Group,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import useFetch from "use-http";
import urlSchema from "../schemas/url.schema";
interface UrlData {
  url: string;
}
type Short = string | null;
function UrlShortener() {
  const [short, setShort] = useState<Short>(null);
  const form = useForm<UrlData>({
    initialValues: {
      url: "",
    },
    schema: zodResolver(urlSchema),
  });

  const { error, post, loading, response } = useFetch(
    `${process.env.REACT_APP_serveruri}/api`
  );
  async function handleShorten(data: UrlData) {
    setShort(null);
    await post("/url/shorten", data);
    //console.log("Server URI, ", process.env.REACT_APP_serveruri);
    //console.log("Response status, ", response.status);
    if (response.ok) return setShort(response.data.short);
    form.setFieldError("url", "something went wrong");
  }
  return (
    <Center sx={() => ({ height: "100%" })}>
      <form onSubmit={form.onSubmit((values) => handleShorten(values))}>
        <TextInput
          size="lg"
          placeholder="Enter your url"
          {...form.getInputProps("url")}
        />
        <Center>
          <Group position="center" mt="md">
            <Button type="submit">Shorten</Button>
          </Group>
        </Center>
        <Center mt="md">
          {short && (
            <Text size="xl" sx={(theme) => ({ color: theme.colors.accent[0] })}>
              Your Shortened link:{" "}
              {`${process.env.REACT_APP_serveruri}/${short}`}
            </Text>
          )}
        </Center>
      </form>
    </Center>
  );
}

export default UrlShortener;
