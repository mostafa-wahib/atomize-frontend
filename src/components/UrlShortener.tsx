import { Button, Center, Group, Text, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import useFetch from "use-http";
import urlSchema from "../schemas/url.schema";
import classes from "../styles/UrlShortener.module.scss";
interface UrlData {
  url: string;
}
type Short = string | null;
const UrlShortener: React.FC = () => {
  const [short, setShort] = useState<Short>(null);
  const form = useForm<UrlData>({
    initialValues: {
      url: "",
    },
    schema: zodResolver(urlSchema),
  });

  const { post, loading, response } = useFetch(
    `${process.env.REACT_APP_serveruri}/v1`
  );
  async function handleShorten(data: UrlData) {
    setShort(null);
    await post("/url/shorten", data);
    if (response.ok) return setShort(response.data.short);
    form.setFieldError("url", "something went wrong");
  }
  return (
    <Center className={classes.container}>
      <form
        className={classes["url-form"]}
        onSubmit={form.onSubmit((values) => handleShorten(values))}
      >
        <TextInput
          size="xl"
          placeholder="Enter your url"
          {...form.getInputProps("url")}
        />
        <Center>
          <Group position="center" mt="md">
            <Button size="lg" className={classes["main-button"]} type="submit">
              {loading ? "Loading..." : "Shorten"}
            </Button>
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
};

export default UrlShortener;
